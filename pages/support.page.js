/**
 * Page Object Model representing the Contact Us and Support Flow
 */
class SupportPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        this.supportMenuLink = page.getByRole('link', { name: 'Contact us' });
        this.clientNameField = page.locator('input[data-qa="name"]');
        this.clientEmailField = page.locator('input[data-qa="email"]');
        this.messageSubjectField = page.locator('input[data-qa="subject"]');
        this.messageBodyField = page.locator('#message');
        this.fileAttachmentInput = page.locator('input[name="upload_file"]');
        this.formSubmitButton = page.locator('input[data-qa="submit-button"]');
        this.alertSuccessBanner = page.locator('.status.alert.alert-success').first();
    }

    /**
     * Open base application URL
     */
    async openApp() {
        await this.page.goto('https://automationexercise.com/', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    }

    /**
     * Navigate to the support/contact form page
     */
    async navigateToSupport() {
        await Promise.all([
            this.page.waitForURL('**/contact_us'),
            this.supportMenuLink.click({ force: true })
        ]);
    }

    /**
     * Populate fields in the Contact form
     * @param {string} name
     * @param {string} email
     * @param {string} subject
     * @param {string} message
     */
    async populateSupportForm(name, email, subject, message) {
        await this.clientNameField.waitFor({ state: 'visible' });
        await this.clientNameField.fill(name);
        await this.clientEmailField.fill(email);
        await this.messageSubjectField.fill(subject);
        await this.messageBodyField.fill(message);
        await this.fileAttachmentInput.setInputFiles('package.json');
    }

    /**
     * Click form submit and automatically accept dialog
     */
    async submitSupportForm() {
        this.page.on('dialog', async dialog => {
            await dialog.accept();
        });

        await this.formSubmitButton.scrollIntoViewIfNeeded();
        await this.formSubmitButton.click({ force: true });
    }
}

module.exports = SupportPage;
