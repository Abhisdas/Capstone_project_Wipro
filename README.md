# E-Commerce QA Automation Suite

A full-stack automated testing solution for validating e-commerce web applications and their REST API endpoints. Built with Playwright and Node.js, following the Page Object Model (POM) architecture.

**Author:** Abhishek Das

---

## Core Capabilities

- **Browser-Based Validation**: Automated chromium engine tests for UI verification
- **Resilient Element Targeting**: Uses Playwright's `getByRole`, `getByPlaceholder`, and CSS locator strategies for stable test execution
- **Page Object Architecture**: Modular page classes (`AccountGateway`, `StorefrontManager`, `HelpDeskPortal`) for maintainability
- **Data-Driven Execution**: Externalized test datasets in JavaScript modules for parameterized runs
- **API Layer Testing**: HTTP endpoint validation using Axios client library
- **Failure Diagnostics**: Automatic screenshots, video recordings, and execution traces on test failures
- **Dual Report Generation**: Both Playwright HTML and Allure interactive dashboards

---

## Technology Used

| Component         | Technology       |
|--------------------|------------------|
| Test Runner        | Playwright       |
| Language           | JavaScript (Node.js) |
| HTTP Client        | Axios            |
| Reporting          | HTML + Allure    |
| Version Control    | Git & GitHub     |

---

## Directory Layout

```text
.
├── api/                       # HTTP client configuration
│   └── api-client.js
├── data/                      # Parameterized test input datasets
│   ├── login-data.js
│   ├── product-data.js
│   └── signup-data.js
├── fixtures/                  # Playwright custom test fixtures
│   └── base-fixture.js
├── pages/                     # Page Object Model classes
│   ├── auth.page.js           # AccountGateway
│   ├── catalog.page.js        # StorefrontManager
│   └── support.page.js        # HelpDeskPortal
├── tests/                     # Organized test suites
│   ├── api/                   # REST API endpoint validation
│   ├── auth/                  # Authentication & registration flows
│   ├── cart-management/       # Shopping basket operations
│   ├── checkout-process/      # Order initiation workflow
│   ├── customer-support/      # Help desk form validation
│   ├── payment-validation/    # Payment page element checks
│   ├── product-catalog/       # Product browsing & search
│   ├── shipping-delivery/     # Delivery page navigation
│   └── user-profile/          # User account page checks
├── playwright.config.js       # Test runner configuration
├── package.json               # Dependencies & npm scripts
└── README.md
```

---

## Getting Started

### Prerequisites
Ensure Node.js (v18+) is installed on your machine.

### Install Dependencies
```bash
npm install
npx playwright install chromium
```

### Run Tests

Run the entire suite:
```bash
npm test
```

Run with visual browser UI:
```bash
npm run test:ui
```

Run with visible browser window:
```bash
npm run test:headed
```

Run a specific test module:
```bash
npx playwright test tests/auth/
```

---

## Viewing Reports

**Interactive HTML Report:**
```bash
npm run report:html
```

**Allure Dashboard:**
```bash
npm run report:allure
```
