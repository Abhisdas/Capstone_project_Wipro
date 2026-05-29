const { test, expect } = require('../../fixtures/base-fixture');

test('Check Route Navigation to Auth Form from Header Link', async ({ page }) => {
    await page.goto('https://automationexercise.com', { waitUntil: 'commit' });
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await expect(page).toHaveURL(/login/);
});
