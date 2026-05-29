const { test, expect } = require('../../fixtures/base-fixture');

test('Check Initialization and Title of App Homepage', async ({ page }) => {
    await page.goto('https://automationexercise.com/', { waitUntil: 'commit' });
    await expect(page).toHaveTitle(/Automation Exercise/);
});
