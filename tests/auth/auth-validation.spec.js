const { test, expect } = require('@playwright/test');

test.use({
    storageState: 'playwright/.auth/user.json'
});

test('Confirm Stored Session Keeps User Signed In', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(
        page.getByRole('link', { name: 'Logout' })
    ).toBeVisible();
});
