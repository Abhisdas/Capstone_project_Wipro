/**
 * HelpDeskPortal - Manages the contact/support form interactions
 * including form population, file attachment, and submission.
 */
class HelpDeskPortal {

    /**
     * Initializes locator references for the help desk portal
     * @param {import('@playwright/test').Page} browserPage - Active Playwright page context
     */
    constructor(browserPage) {
        this.browserPage = browserPage;

        this.helpDeskNavLink = browserPage.getByRole('link', { name: 'Contact us' });
        this.senderNameInput = browserPage.locator('input[data-qa="name"]');
        this.senderEmailInput = browserPage.locator('input[data-qa="email"]');
        this.topicInput = browserPage.locator('input[data-qa="subject"]');
        this.detailsTextarea = browserPage.locator('#message');
        this.attachmentPicker = browserPage.locator('input[name="upload_file"]');
        this.sendRequestBtn = browserPage.locator('input[data-qa="submit-button"]');
        this.confirmationBanner = browserPage.locator('.status.alert.alert-success').first();
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

    async goToHelpDesk() {
        await this.browserPage.goto('https://automationexercise.com/contact_us', {
            waitUntil: 'commit',
            timeout: 60000
        });
        await this.senderNameInput.waitFor({ state: 'visible', timeout: 20000 });
    }

    /**
     * Fills out every field of the help desk request form
     * @param {string} senderName - Full name of the person submitting
     * @param {string} senderEmail - Contact email address
     * @param {string} topic - Brief subject line
     * @param {string} details - Detailed message body
     */
    async fillHelpRequest(senderName, senderEmail, topic, details) {
        await this.senderNameInput.waitFor({ state: 'visible' });
        await this.senderNameInput.fill(senderName);
        await this.senderEmailInput.fill(senderEmail);
        await this.topicInput.fill(topic);
        await this.detailsTextarea.fill(details);
        await this.attachmentPicker.setInputFiles('package.json');
    }

    /**
     * Clicks the send button and handles the browser confirmation dialog
     */
    async dispatchHelpRequest() {
        this.browserPage.on('dialog', async dialog => {
            await dialog.accept();
        });

        await this.sendRequestBtn.scrollIntoViewIfNeeded();
        await this.sendRequestBtn.click({ force: true });
    }
}

module.exports = HelpDeskPortal;
