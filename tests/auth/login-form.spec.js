const { test, expect } = require('../../fixtures/base-fixture');

test('Ensure Login Section Heading Renders on Auth Screen', async ({ page }) => {
    await page.goto('https://automationexercise.com/login', { waitUntil: 'commit' });
    const heading = page.getByText('Login to your account');
    await heading.waitFor({ state: 'visible', timeout: 15000 });
    await expect(heading).toBeVisible();
});
