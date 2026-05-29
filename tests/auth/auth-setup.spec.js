const { test } = require('@playwright/test');
const AccountGateway = require('../../pages/auth.page');

test('Persist Authenticated Browser Session to Disk', async ({ page }) => {
    const gateway = new AccountGateway(page);
    await gateway.launchHomePage();
    await gateway.goToAuthPortal();
    await gateway.executeSignIn('abhis.capstone.tester@gmail.com', 'T3stAcc0unt!');
    await page.context().storageState({ path: 'playwright/.auth/user.json' });
});
