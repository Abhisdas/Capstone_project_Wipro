const { test, expect } = require('@playwright/test');
const HelpDeskPortal = require('../../pages/support.page');

test('Complete Help Request Submission and Verify Success', async ({ page }) => {
    const helpDesk = new HelpDeskPortal(page);
    await helpDesk.launchHomePage();
    await helpDesk.goToHelpDesk();
    await helpDesk.fillHelpRequest(
        'Abhishek Das',
        'abhishek.das.signup@gmail.com',
        'Inquiry from Automated Suite',
        'This message was dispatched by the automated testing framework.'
    );
    await helpDesk.dispatchHelpRequest();
    await expect(
        helpDesk.confirmationBanner
    ).toContainText('Success');
});
