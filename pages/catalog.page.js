/**
 * StorefrontManager - Manages product browsing, searching,
 * cart interactions, and checkout initiation.
 *
 * Encapsulates all storefront-related page interactions
 * from product discovery through cart management.
 */
class StorefrontManager {

    /**
     * Sets up locator references for storefront elements
     * @param {import('@playwright/test').Page} browserPage - Active Playwright page context
     */
    constructor(browserPage) {
        this.browserPage = browserPage;

        // -- Product Metadata Locators --
        this.itemPriceLabel = browserPage.locator('.product-information span span');
        this.itemStockStatus = browserPage.locator('.product-information p').nth(0);
        this.itemConditionLabel = browserPage.locator('.product-information p').nth(1);
        this.itemBrandLabel = browserPage.getByText('Brand:');
        this.allItemsHeading = browserPage.getByText('All Products');

        // -- Checkout Flow Locators --
        this.initiateCheckoutBtn = browserPage.getByText('Proceed To Checkout');
        this.orderReviewSection = browserPage.locator('#cart_items');
        this.redirectToAuthLink = browserPage.getByRole('link', { name: 'Register / Login' });

        // -- Product Browsing Elements --
        this.browseItemsLink = browserPage.getByRole('link', { name: 'Products' });
        this.topItemDetailLink = browserPage.locator('a[href*="/product_details/"]').first();

        // -- Search Interface --
        this.searchTermInput = browserPage.locator('#search_product');
        this.triggerSearchBtn = browserPage.locator('#submit_search');
        this.visibleItemNames = browserPage.locator('.productinfo p');

        // -- Product Detail Page --
        this.itemDetailHeading = browserPage.locator('.product-information h2');

        // -- Shopping Basket Locators --
        this.topItemCartBtn = browserPage.locator('.features_items .product-image-wrapper').first().locator('.add-to-cart').first();
        this.secondItemCartBtn = browserPage.locator('.features_items .product-image-wrapper').nth(1).locator('.add-to-cart').first();
        this.keepShoppingBtn = browserPage.getByRole('button', { name: 'Continue Shopping' });
        this.basketHeaderLink = browserPage.locator('a[href="/view_cart"]').first();
        this.basketItemHeading = browserPage.locator('.cart_description h4 a');
        this.removeBasketItemBtn = browserPage.locator('.cart_quantity_delete');
        this.basketItemCount = browserPage.locator('.cart_quantity');
    }

    /**
     * Opens the main application landing page
     */
    async launchHomePage() {
        await this.browserPage.goto('https://automationexercise.com/', {
            waitUntil: 'commit',
            timeout: 60000
        });
    }

    async openProductListing() {
        await this.browserPage.goto('https://automationexercise.com/products', {
            waitUntil: 'commit',
            timeout: 60000
        });
        await this.allItemsHeading.waitFor({ state: 'visible', timeout: 20000 });
    }

    /**
     * Types a query into the search bar and triggers the search
     * @param {string} searchTerm - Keyword for product search
     */
    async findProductByKeyword(searchTerm) {
        await this.searchTermInput.waitFor({ state: 'visible', timeout: 10000 });
        await this.searchTermInput.fill(searchTerm);
        
        await this.triggerSearchBtn.click();
        try {
            await this.browserPage.waitForURL(`**/products?search=*`, { timeout: 3000 });
        } catch (e) {
            // Self-healing retry if first click didn't trigger navigation due to layout shift or overlay
            await this.triggerSearchBtn.click({ force: true });
            await this.browserPage.waitForURL(`**/products?search=*`, { timeout: 5000 });
        }
    }

    /**
     * Navigates to the details page of the first listed product
     */
    async inspectTopProduct() {
        await this.topItemDetailLink.waitFor({ state: 'visible', timeout: 20000 });
        await this.topItemDetailLink.scrollIntoViewIfNeeded();
        await this.topItemDetailLink.click({ force: true });
        await this.browserPage.waitForURL('**/product_details/*', { waitUntil: 'commit', timeout: 25000 });
    }

    /**
     * Places the first product into the shopping basket
     */
    async placeTopItemInBasket() {
        await this.topItemCartBtn.waitFor({ state: 'visible', timeout: 20000 });
        await this.topItemCartBtn.scrollIntoViewIfNeeded();
        await this.topItemCartBtn.click({ force: true });
        try {
            await this.keepShoppingBtn.waitFor({ state: 'visible', timeout: 5000 });
        } catch (e) {
            // Self-healing retry
            await this.topItemCartBtn.click({ force: true });
            await this.keepShoppingBtn.waitFor({ state: 'visible', timeout: 8000 });
        }
    }

    /**
     * Places the second product into the shopping basket
     */
    async placeSecondItemInBasket() {
        await this.secondItemCartBtn.waitFor({ state: 'visible', timeout: 10000 });
        await this.secondItemCartBtn.scrollIntoViewIfNeeded();
        await this.secondItemCartBtn.click();
        try {
            await this.keepShoppingBtn.waitFor({ state: 'visible', timeout: 3000 });
        } catch (e) {
            // Self-healing retry if first click didn't trigger modal due to layout shift or overlay
            await this.secondItemCartBtn.click({ force: true });
            await this.keepShoppingBtn.waitFor({ state: 'visible', timeout: 5000 });
        }
    }

    /**
     * Dismisses the product-added confirmation dialog
     */
    async dismissConfirmationPopup() {
        await this.keepShoppingBtn.waitFor({ state: 'visible', timeout: 10000 });
        await this.keepShoppingBtn.click();
    }

    async openBasketPage() {
        await this.browserPage.goto('https://automationexercise.com/view_cart', {
            waitUntil: 'commit',
            timeout: 60000
        });
    }

    async discardBasketItem() {
        await this.removeBasketItemBtn.waitFor({ state: 'visible', timeout: 20000 });
        await this.removeBasketItemBtn.click();
        // Wait for the cart row to be removed from the DOM
        await this.basketItemHeading.waitFor({ state: 'detached', timeout: 20000 });
    }

    /**
     * Starts the checkout process from the cart page
     */
    async startCheckout() {
        await this.initiateCheckoutBtn.waitFor({ state: 'visible' });
        await this.initiateCheckoutBtn.click({ force: true });
    }

    /**
     * Confirms the checkout review section is displayed
     */
    async confirmOrderReviewVisible() {
        await this.orderReviewSection.waitFor({ state: 'visible' });
    }
}

module.exports = StorefrontManager;
