const { test, expect } = require('@playwright/test');

test('Check Contact Section Heading', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await expect(
        page.getByText('Get In Touch')
    ).toBeVisible();
});
