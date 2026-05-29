const { test } = require('../../fixtures/base-fixture');
const AccountGateway = require('../../pages/auth.page');

test('Persist Authenticated Browser Session to Disk', async ({ page }) => {
    const gateway = new AccountGateway(page);
    await gateway.launchHomePage();
    await gateway.goToAuthPortal();
    await gateway.executeSignIn('abhis.capstone.tester@gmail.com', 'T3stAcc0unt!');
    // Wait for successful login before saving session
    await gateway.sessionEndLink.waitFor({ state: 'visible', timeout: 30000 });
    await page.context().storageState({ path: 'playwright/.auth/user.json' });
});
