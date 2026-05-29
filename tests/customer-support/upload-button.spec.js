const { test, expect } = require('../../fixtures/base-fixture');

test('Confirm File Attachment Picker Renders on Help Desk Page', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'commit' });
    const picker = page.locator('input[name="upload_file"]');
    await picker.waitFor({ state: 'attached', timeout: 15000 });
    await expect(picker).toBeAttached();
});
