const { test, expect } = require('../../fixtures/base-fixture');

test('Check Home Navigation Link Click from Login Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    const homeLink = page.getByRole('link', { name: 'Home' }).first();
    await homeLink.waitFor({ state: 'visible', timeout: 15000 });
    await homeLink.click();
    await page.waitForURL('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com/');
});
