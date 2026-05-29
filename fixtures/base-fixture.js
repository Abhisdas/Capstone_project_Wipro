/**
 * Custom Playwright fixture that pre-navigates to the target
 * application before each test that requests the 'readyPage' context.
 */
const playwrightBase = require('@playwright/test');

exports.test = playwrightBase.test.extend({
    readyPage: async ({ page }, use) => {
        await page.goto('https://automationexercise.com/');
        await use(page);
    }
});

exports.expect = playwrightBase.expect;
