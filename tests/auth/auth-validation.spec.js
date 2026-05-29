const { test, expect } = require('../../fixtures/base-fixture');

test.use({
    storageState: 'playwright/.auth/user.json'
});

test('Confirm Stored Session Keeps User Signed In', async ({ page }) => {
    await page.goto('https://automationexercise.com/', { waitUntil: 'commit' });
    const logoutLink = page.getByRole('link', { name: 'Logout' });
    await logoutLink.waitFor({ state: 'visible', timeout: 30000 });
    await expect(logoutLink).toBeVisible();
});
