const { test, expect } = require('../../fixtures/base-fixture');
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
    await helpDesk.confirmationBanner.waitFor({ state: 'visible', timeout: 20000 });
    await expect(
        helpDesk.confirmationBanner
    ).toContainText('Success', { timeout: 20000 });
});
