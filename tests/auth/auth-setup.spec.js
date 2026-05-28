const { test } = require('@playwright/test');
const AuthPage = require('../../pages/auth.page');

test('Setup User Authentication Session State', async ({ page }) => {
    const authPage = new AuthPage(page);
    await authPage.openApp();
    await authPage.navigateToAuth();
    await authPage.performLogin('alex.dev.testing@gmail.com', 'securePass123');
    await page.context().storageState({ path: 'playwright/.auth/user.json' });
});
