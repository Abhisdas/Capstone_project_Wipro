const { test, expect } = require('@playwright/test');

test('Ensure Contact Us Hyperlink Appears on Auth Screen', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await expect(
        page.getByRole('link', { name: 'Contact us' })
    ).toBeVisible();
});
