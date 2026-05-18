# 🎭 Playwright Automation — Capstone Project

> A production-grade, end-to-end test automation framework built with **Playwright (JavaScript/TypeScript)** targeting **[AutomationExercise.com](https://automationexercise.com)** — an open e-commerce platform purpose-built for QA practice.

---

## 📌 Project Overview

| Field | Detail |
|---|---|
| **Automation Tool** | Playwright (JavaScript / TypeScript) |
| **Target Application** | AutomationExercise.com |
| **Total Services in Scope** | 8 Core Services |
| **Total Test Cases** | 120 (15 per service) |
| **Browsers Covered** | Chromium · Firefox · WebKit |
| **Reporting** | Playwright HTML Reporter |
| **CI/CD** | GitHub Actions |

---

## 📁 Project Structure

```
playwright-capstone/
├── tests/
│   ├── auth/                     # Service 1 – Authentication & User Management
│   ├── search/                   # Service 2 – Product Search & Discovery
│   ├── cart/                     # Service 3 – Cart Management
│   ├── profile/                  # Service 4 – User Profile Management
│   ├── address/                  # Service 5 – Address Book & Shipping
│   ├── support/                  # Service 6 – Customer Support & Feedback
│   ├── api/                      # Service 7 – Internal API Testing
│   └── persistence/              # Service 8 – System Persistence & State
├── pages/                        # Page Object Models (POM)
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── ...
├── fixtures/                     # Shared test fixtures & setup helpers
├── utils/                        # Reusable utility functions
├── .github/
│   └── workflows/
│       └── playwright.yml        # GitHub Actions CI pipeline
├── playwright.config.ts          # Playwright configuration
├── Capstone_Project_Planner.docx # Full proposal document
└── README.md
```

---

## 🧪 Services Selected for Testing

| # | Service | What's Tested (15 cases each) |
|---|---|---|
| 1 | **Authentication & User Management** | Registration, login with valid/invalid creds, logout, session handling, forgot-password redirect, blank field validations |
| 2 | **Product Search & Discovery** | Search bar accuracy, partial-text matching, price & brand filters, sort orders (Low→High, High→Low, Latest) |
| 3 | **Cart Management** | Add to cart, badge count increments, quantity updates, item removal, subtotal recalculation, coupon logic |
| 4 | **User Profile Management** | Update name & email, change password, password-rule enforcement, order history dashboard |
| 5 | **Address Book & Shipping Service** | Add/update/delete addresses, mandatory field checks (zip, phone), set default shipping address |
| 6 | **Customer Support & Feedback** | Contact Us form submission, mandatory field restrictions, FAQ accordion expand/collapse |
| 7 | **Internal API Testing** | HTTP status codes (200 / 401), JSON payload structure assertions, error payload validation |
| 8 | **System Persistence & State Validation** | Cart & session after reload, hard refresh behaviour, cookies & local storage integrity |

---

## 📄 Proposal Document

The full project proposal — covering all services, testing scopes, objectives, and deliverables — is documented and available in this repository:

📎 **[`Capstone_Project_Planner.docx`](./Capstone_Project_Planner.docx)**

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18+**
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/abhisdas/playwright-capstone.git
cd playwright-capstone

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all 120 tests across all browsers
npx playwright test

# Run tests for a specific service
npx playwright test tests/auth/

# Run in headed mode (watch the browser)
npx playwright test --headed

# Run on a single browser only
npx playwright test --project=chromium

# View the HTML test report
npx playwright show-report
```

---

## 📊 Test Reporting

Playwright generates a detailed HTML report after each run:

```bash
npx playwright show-report
```

- ✅ Passed / ❌ Failed test summary
- 🔁 Retry trace viewer for failed tests
- 📸 Screenshots captured on failure
- 🎥 Video recordings (if enabled in config)

---

## ⚙️ Configuration

Key settings in `playwright.config.ts`:

```ts
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL: 'https://automationexercise.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});
```

---

## 🔄 CI/CD — GitHub Actions

Tests run automatically on every push and pull request:

```yaml
# .github/workflows/playwright.yml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 18 }
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

---

## 🏗️ Design Patterns

- **Page Object Model (POM)** — all selectors and page interactions encapsulated in `pages/`
- **Data-Driven Testing** — test data stored separately and fed via `forEach` / fixtures
- **Shared Fixtures** — authenticated page state reused across tests to reduce setup time
- **API + UI hybrid** — API tests validate backend contracts; UI tests verify end-to-end flows

---

## 📬 Contact

Built as part of the **SDET Playwright Training** capstone.  
Feel free to open an issue or pull request for suggestions or improvements.

---

<div align="center">
  <sub>Made with ❤️ using <a href="https://playwright.dev">Playwright</a></sub>
</div>
