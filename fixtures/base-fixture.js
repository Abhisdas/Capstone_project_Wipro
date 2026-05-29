/**
 * Base fixture for all e-commerce automation tests.
 * Extends the default Playwright test fixture to implement global ad-blocking,
 * preventing network timeouts and significantly speeding up page execution.
 */
const playwrightBase = require('@playwright/test');

exports.test = playwrightBase.test.extend({
    page: async ({ page }, use) => {
        await page.route('**/*', (route) => {
            const url = route.request().url();
            const isGoogle = url.includes('google');
            const isAllowedGoogle = url.includes('ajax.googleapis.com') || 
                                    url.includes('fonts.googleapis.com') || 
                                    url.includes('fonts.gstatic.com');
            
            if (
                (isGoogle && !isAllowedGoogle) ||
                url.includes('doubleclick') || 
                url.includes('analytics') || 
                url.includes('adnx') || 
                url.includes('quantserve') || 
                url.includes('facebook') || 
                url.includes('amazon-adsystem') ||
                url.includes('adnxs') ||
                url.includes('moatads')
            ) {
                route.abort();
            } else {
                route.continue();
            }
        });
        await use(page);
    }
});

exports.expect = playwrightBase.expect;
