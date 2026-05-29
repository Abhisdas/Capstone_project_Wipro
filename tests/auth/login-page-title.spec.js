const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm Auth Page Document Title Matches Expected', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(page).toHaveTitle(/Automation Exercise/);
});
