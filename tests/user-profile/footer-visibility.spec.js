const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Footer Renders on Profile View inside Auth Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.locator('#footer')
    ).toBeVisible();
});
