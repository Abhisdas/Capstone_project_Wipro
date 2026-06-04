// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Playwright configuration for the E-Commerce QA Automation Suite.
 * Runs against chromium, firefox, and webkit for full Allure suite coverage.
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  /* Execute test files concurrently for faster feedback */
  fullyParallel: true,

  /* Prevent accidental .only() usage in CI pipelines */
  forbidOnly: !!process.env.CI,

  /* Retry flaky tests once locally too (website is unreliable) */
  retries: process.env.CI ? 2 : 1,

  /* Single worker ensures stable execution order */
  workers: 1,

  /* Dual reporting: interactive HTML + Allure dashboards */
  reporter: [
    ['html'],
    ['allure-playwright', {
      detail: true,
      outputFolder: 'allure-results',
      suiteTitle: false,
    }]
  ],

  /* Global defaults applied to every test project */
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    actionTimeout: 30000,
    navigationTimeout: 60000,
  },

  /* Browser engine configuration - all 3 engines for full Allure suite coverage */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
      },
    },
  ],
});
