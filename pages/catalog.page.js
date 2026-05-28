/**
 * Page Object Model representing the Product Catalog & Shopping Cart flows
 */
class CatalogPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        // Details and Meta Elements
        this.priceDisplay = page.locator('.product-information span span');
        this.availabilityStatus = page.locator('.product-information p').nth(0);
        this.conditionStatus = page.locator('.product-information p').nth(1);
        this.brandText = page.getByText('Brand:');
        this.catalogHeading = page.getByText('All Products');

        // Navigation and Action Elements
        this.checkoutButton = page.getByText('Proceed To Checkout');
        this.checkoutSection = page.locator('#cart_items');
        this.authRedirectLink = page.getByRole('link', { name: 'Register / Login' });

        // Product Listings
        this.catalogLink = page.getByRole('link', { name: 'Products' });
        this.firstProductDetailsLink = page.locator('a[href*="/product_details/"]').first();

        // Search Section
        this.searchField = page.locator('#search_product');
        this.searchSubmitBtn = page.locator('#submit_search');
        this.listedProductTitles = page.locator('.productinfo p');

        // Detail Page
        this.detailProductName = page.locator('.product-information h2');

        // Shopping Cart Elements
        this.firstAddToCartBtn = page.locator('.features_items .product-image-wrapper').first().locator('.add-to-cart').first();
        this.secondAddToCartBtn = page.locator('.features_items .product-image-wrapper').nth(1).locator('.add-to-cart').first();
        this.modalContinueBtn = page.getByRole('button', { name: 'Continue Shopping' });
        this.cartNavBtn = page.locator('a[href="/view_cart"]').first();
        this.cartItemTitle = page.locator('.cart_description h4 a');
        this.deleteCartItemBtn = page.locator('.cart_quantity_delete');
        this.cartItemQuantity = page.locator('.cart_quantity');
    }

    /**
     * Navigate to the home page of the application under test
     */
    async openApp() {
        await this.page.goto('https://automationexercise.com/', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    }

    /**
     * Click the products navigation link in the header
     */
    async navigateToCatalog() {
        await this.catalogLink.waitFor({ state: 'visible' });
        await this.catalogLink.click({ force: true });
    }

    /**
     * Perform product search
     * @param {string} productName
     */
    async searchCatalog(productName) {
        await this.searchField.waitFor({ state: 'visible', timeout: 10000 });
        await this.searchField.fill(productName);
        await this.searchSubmitBtn.click({ force: true });
    }

    /**
     * Open the details page of the first listed product
     */
    async viewFirstProductDetails() {
        await this.firstProductDetailsLink.click({ force: true });
    }

    /**
     * Add the first listed product to the shopping cart
     */
    async addFirstProductToCart() {
        await this.firstAddToCartBtn.scrollIntoViewIfNeeded();
        await this.firstAddToCartBtn.click({ force: true });
    }

    /**
     * Add the second listed product to the shopping cart
     */
    async addSecondProductToCart() {
        await this.secondAddToCartBtn.scrollIntoViewIfNeeded();
        await this.secondAddToCartBtn.click();
    }

    /**
     * Dismiss the "Product Added" success modal
     */
    async resumeShopping() {
        await this.modalContinueBtn.waitFor({ state: 'visible', timeout: 10000 });
        await this.modalContinueBtn.click();
    }

    /**
     * Navigate directly to the shopping cart page
     */
    async navigateToCart() {
        await this.cartNavBtn.click({ force: true });
    }

    /**
     * Remove the item from the cart
     */
    async removeProductFromCart() {
        await this.deleteCartItemBtn.click({ force: true });
    }

    /**
     * Click the Proceed to Checkout button on the cart page
     */
    async proceedToCheckout() {
        await this.checkoutButton.waitFor({ state: 'visible' });
        await this.checkoutButton.click({ force: true });
    }

    /**
     * Verify checkout page is visible
     */
    async verifyCheckoutSection() {
        await this.checkoutSection.waitFor({ state: 'visible' });
    }
}

module.exports = CatalogPage;
