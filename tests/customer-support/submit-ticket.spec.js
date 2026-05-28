const { test, expect } = require('@playwright/test');
const SupportPage = require('../../pages/support.page');

test('Submit Contact/Support Ticket Form Check', async ({ page }) => {
    const supportPage = new SupportPage(page);
    await supportPage.openApp();
    await supportPage.navigateToSupport();
    await supportPage.populateSupportForm(
        'Jane Miller',
        'jane.qa.testing@gmail.com',
        'Help Request',
        'This is a query from automated test framework.'
    );
    await supportPage.submitSupportForm();
    await expect(
        supportPage.alertSuccessBanner
    ).toContainText('Success');
});
