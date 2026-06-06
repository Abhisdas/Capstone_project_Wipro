# E-Commerce QA Automation Suite

A full-stack automated testing solution for validating e-commerce web applications and their REST API endpoints. Built with **Playwright** and **Node.js**, following the **Page Object Model (POM)** architecture with full **Allure reporting** and **CI/CD via GitHub Actions**.

**Author:** Abhishek Das

---

## 🏆 Test Results

### ✅ GitHub CI — Allure Report (375 Tests | 100% Pass Rate)
<img width="1907" height="894" alt="image" src="https://github.com/user-attachments/assets/5ef6eb2d-7b6c-43f1-9560-0bb89a7e9fae" />


> 🌐 Live Report: **[https://abhisdas.github.io/Capstone_project_Wipro/](https://abhisdas.github.io/Capstone_project_Wipro/)**

| Metric | Result |
|--------|--------|
| **Total Tests** | 375 |
| **Passed** | 375 |
| **Failed** | 0 |
| **Pass Rate** | 100% 🟢 |
| **Browsers** | Chromium + Firefox + WebKit |
| **Duration** | 6m 12s |
| **Platform** | GitHub Actions (Ubuntu) |

---

## 🚀 CI/CD Pipeline

Every push to `main` automatically:
1. 🧪 Runs all tests on **Chromium**, **Firefox**, and **WebKit**
2. 📊 Generates an **Allure HTML report** with trend history
3. 🌐 Deploys the report to **GitHub Pages**
4. 📦 Uploads test artifacts (results + HTML report)

**Live Allure Dashboard:** [https://abhisdas.github.io/Capstone_project_Wipro/](https://abhisdas.github.io/Capstone_project_Wipro/)

---

## 🔧 Core Capabilities

- **Multi-Browser Testing** — Runs across Chromium, Firefox, and WebKit (Safari engine)
- **Parallel Execution** — 4 workers in CI for faster feedback
- **Page Object Architecture** — Modular page classes for maintainability
- **Data-Driven Execution** — Externalized test datasets for parameterized runs
- **API Layer Testing** — HTTP endpoint validation using Axios
- **Failure Diagnostics** — Auto screenshots, traces on test failures
- **Dual Reporting** — Playwright HTML + Allure interactive dashboards
- **Trend Tracking** — Allure keeps history across 20 CI runs

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| Test Runner | Playwright v1.40+ |
| Language | JavaScript (Node.js 18+) |
| HTTP Client | Axios |
| Reporting | Allure + Playwright HTML |
| CI/CD | GitHub Actions |
| Report Hosting | GitHub Pages |
| Version Control | Git & GitHub |

---

## 📁 Directory Layout

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml      # CI/CD pipeline definition
├── api/                        # HTTP client configuration
│   └── api-client.js
├── data/                       # Parameterized test input datasets
│   ├── login-data.js
│   ├── product-data.js
│   └── signup-data.js
├── fixtures/                   # Playwright custom test fixtures
│   └── base-fixture.js
├── pages/                      # Page Object Model classes
│   ├── auth.page.js            # AccountGateway
│   ├── catalog.page.js         # StorefrontManager
│   └── support.page.js         # HelpDeskPortal
├── tests/                      # Organized test suites (375 tests across 3 browsers)
│   ├── api/                    # REST API endpoint validation
│   ├── auth/                   # Authentication & registration flows
│   ├── cart-management/        # Shopping basket operations
│   ├── checkout-process/       # Order initiation workflow
│   ├── customer-support/       # Help desk form validation
│   ├── payment-validation/     # Payment page element checks
│   ├── product-catalog/        # Product browsing & search
│   ├── shipping-delivery/      # Delivery page navigation
│   └── user-profile/           # User account page checks
├── playwright.config.js        # Test runner configuration
├── package.json                # Dependencies & npm scripts
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites
Ensure Node.js (v18+) is installed on your machine.

### Install Dependencies
```bash
npm install
npx playwright install --with-deps
```

### Run Tests

```bash
# Run all tests (all browsers)
npm test

# Run chromium only
npm run test:chromium

# Run firefox only
npm run test:firefox

# Run webkit only
npm run test:webkit

# Run with visible browser window
npm run test:headed

# Run with interactive Playwright UI
npm run test:ui

# Run a specific test folder
npx playwright test tests/auth/
```

---

## 📊 Viewing Reports

### Allure Report (Recommended)

```bash
# Serve live from results (auto-opens browser)
npm run report:allure

# Generate HTML then open
npm run report:allure:generate
```

### Playwright HTML Report

```bash
npm run report:html
```

### Live Online Report (GitHub Pages)

> No setup needed — just open the link:
> **🌐 [https://abhisdas.github.io/Capstone_project_Wipro/](https://abhisdas.github.io/Capstone_project_Wipro/)**

---

## 📋 Test Coverage

| Module | Tests (per browser) | Total (×3 browsers) | Coverage |
|--------|---------------------|---------------------|----------|
| Authentication | 15 | 45 | Login, logout, signup, validation |
| Product Catalog | 22 | 66 | Search, browse, details, filters |
| Cart Management | 16 | 48 | Add, remove, quantity, persistence |
| Checkout Process | 16 | 48 | Navigation, flow, validation |
| Customer Support | 14 | 42 | Form fields, submission |
| Payment Validation | 5 | 15 | Page elements, navigation |
| Shipping & Delivery | 10 | 30 | Page structure, links |
| User Profile | 15 | 45 | Auth page, navigation |
| REST API | 12 | 36 | Brands, products, status codes |
| **Total** | **125** | **375** | **Full E-Commerce flow — 100% Pass ✅** |
