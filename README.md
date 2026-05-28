# E-Commerce Test Automation Suite (Playwright & JS)

An enterprise-grade QA automation framework designed for end-to-end testing of e-commerce web applications and REST APIs. Built on top of Playwright and Node.js.

---

## Features & Integration

- **Cross-Browser Verification**: Parallelized chromium engine testing.
- **Robust Locators**: Resilient selector strategies utilizing native Playwright `getByRole`, `getByPlaceholder`, and `locator` models.
- **Page Object Design (POM)**: Distinct encapsulation of pages (Auth, Catalog, Support) to achieve high code reuse and low maintenance overhead.
- **Data-Driven Workflows**: Parameterized test executions utilizing externalized mock JSON/JS datasets.
- **API Automation Testing**: Performance and status verification of REST endpoints via Axios client library.
- **Traceability & Diagnostics**: Screenshots, screen recording, and full execution trace logs captured on failure.
- **HTML and Allure Reports**: Structured, interactive report dashboards for visualization of test run histories.

---

## Technical Stack

- **Automation Engine**: Playwright Test Runner
- **Coding Standards**: JavaScript (Node.js)
- **HTTP/API Client**: Axios
- **Reporting Systems**: Allure and built-in Playwright HTML

---

## Project Structure

```text
.
├── api/                       # API clients and routing
│   └── api-client.js
├── data/                      # Test data inputs for parameterized execution
│   ├── login-data.js
│   ├── product-data.js
│   └── signup-data.js
├── fixtures/                  # Playwright test fixtures and hooks
│   └── base-fixture.js
├── pages/                     # Page Object Models
│   ├── auth.page.js
│   ├── catalog.page.js
│   └── support.page.js
├── tests/                     # Specialized test suites
│   ├── api/                   # REST API tests
│   ├── auth/                  # User login, registration, and forms
│   ├── cart-management/       # Items addition/removal & persistence
│   ├── checkout-process/      # Shipping/Billing and checkout workflows
│   ├── customer-support/      # Support forms and dialog validation
│   ├── payment-validation/    # Checkout payments elements verification
│   ├── product-catalog/       # Product details, search query check
│   ├── shipping-delivery/     # Delivery options and navigation flow
│   └── user-profile/          # User preferences and profile checks
├── playwright.config.js       # Playwright runner options
├── package.json               # Node script targets & dependencies
└── README.md                  # Project documentation
```

---

## Execution Guidelines

### 1. Setup Dependencies
To download all required library packages and configure Playwright browsers:

```bash
npm install
npx playwright install chromium
```

### 2. Launch Tests

- **Run complete suite:**
  ```bash
  npm test
  ```

- **Run in browser UI mode:**
  ```bash
  npm run test:ui
  ```

- **Run in headed browser mode:**
  ```bash
  npm run test:headed
  ```

- **Run specific directory suite (e.g. catalog):**
  ```bash
  npx playwright test tests/product-catalog/
  ```

---

## Reports Visualization

### Standard HTML report
To launch the default interactive browser report:
```bash
npm run report:html
```

### Allure dashboard
To build and compile the premium Allure report dashboard:
```bash
npm run report:allure
```
