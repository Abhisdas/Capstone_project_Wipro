const { test, expect } = require('../../fixtures/base-fixture');

test('Check Document Title For Authentication Window', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(page).toHaveTitle(/Automation Exercise/);
});
