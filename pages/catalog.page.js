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
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    }

    /**
     * Clicks the products navigation tab in the header
     */
    async openProductListing() {
        await this.browseItemsLink.waitFor({ state: 'visible' });
        await this.browseItemsLink.click({ force: true });
    }

    /**
     * Types a query into the search bar and triggers the search
     * @param {string} searchTerm - Keyword for product search
     */
    async findProductByKeyword(searchTerm) {
        await this.searchTermInput.waitFor({ state: 'visible', timeout: 10000 });
        await this.searchTermInput.fill(searchTerm);
        await this.triggerSearchBtn.click({ force: true });
    }

    /**
     * Navigates to the details page of the first listed product
     */
    async inspectTopProduct() {
        await this.topItemDetailLink.click({ force: true });
    }

    /**
     * Places the first product into the shopping basket
     */
    async placeTopItemInBasket() {
        await this.topItemCartBtn.scrollIntoViewIfNeeded();
        await this.topItemCartBtn.click({ force: true });
    }

    /**
     * Places the second product into the shopping basket
     */
    async placeSecondItemInBasket() {
        await this.secondItemCartBtn.scrollIntoViewIfNeeded();
        await this.secondItemCartBtn.click();
    }

    /**
     * Dismisses the product-added confirmation dialog
     */
    async dismissConfirmationPopup() {
        await this.keepShoppingBtn.waitFor({ state: 'visible', timeout: 10000 });
        await this.keepShoppingBtn.click();
    }

    /**
     * Navigates to the shopping basket page
     */
    async openBasketPage() {
        await this.basketHeaderLink.click({ force: true });
    }

    /**
     * Removes a product entry from the shopping basket
     */
    async discardBasketItem() {
        await this.removeBasketItemBtn.click({ force: true });
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
