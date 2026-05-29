const { test, expect } = require('../../fixtures/base-fixture');

test('Check Email Field Presence inside Auth Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    await expect(
        page.getByPlaceholder('Email Address').first()
    ).toBeVisible();
});
