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

  /* No retries in CI to speed things up */
  retries: process.env.CI ? 0 : 1,

  /* Increase workers in CI for faster execution */
  workers: process.env.CI ? 4 : 1,

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
    video: 'off',
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
