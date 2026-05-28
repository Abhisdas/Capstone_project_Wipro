// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Run tests using single worker for stability */
  workers: 1,

  /* Reporter to use */
  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  /* Shared settings for all the projects below */
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    // We can set default navigation timeouts and launch options
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // automationexercise.com has intrusive ads that block elements.
        // We can add simple ad-blocking/aborting for known ad hosts to make tests stable.
      },
    }
  ],
});
