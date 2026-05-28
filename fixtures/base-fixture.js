const baseTest = require('@playwright/test');

exports.test = baseTest.test.extend({
    preparedPage: async ({ page }, use) => {
        await page.goto('https://automationexercise.com/');
        await use(page);
    }
});

exports.expect = baseTest.expect;
