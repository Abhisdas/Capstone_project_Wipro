// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Playwright configuration for the E-Commerce QA Automation Suite.
 * Targets chromium browser with failure diagnostics enabled.
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  /* Execute test files concurrently for faster feedback */
  fullyParallel: true,

  /* Prevent accidental .only() usage in CI pipelines */
  forbidOnly: !!process.env.CI,

  /* Automatically retry failed tests in CI environments */
  retries: process.env.CI ? 2 : 0,

  /* Single worker ensures stable execution order */
  workers: 1,

  /* Dual reporting: interactive HTML + Allure dashboards */
  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  /* Global defaults applied to every test project */
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  /* Browser engine configuration */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
    }
  ],
});
