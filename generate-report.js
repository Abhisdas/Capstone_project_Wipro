/**
 * generate-report.js
 * Generates a professional Word (.docx) project report for the Capstone QA Automation project.
 * Run with: node generate-report.js
 */

const {
    Document, Packer, Paragraph, Table, TableRow, TableCell,
    TextRun, HeadingLevel, AlignmentType, WidthType, BorderStyle,
    ShadingType, TableLayoutType, VerticalAlign, PageBreak,
    ExternalHyperlink, UnderlineType, Header, Footer, PageNumberElement,
} = require('docx');
const fs = require('fs');

// ─── Color Palette ────────────────────────────────────────────────────────────
const COLORS = {
    primary:    '1E3A5F',  // deep navy
    accent:     '2E86AB',  // steel blue
    green:      '27AE60',  // pass green
    lightBlue:  'EBF4FA',  // table header bg
    lightGreen: 'EAFAF1',  // pass row bg
    lightGray:  'F5F5F5',  // alternate row
    white:      'FFFFFF',
    dark:       '2C3E50',
    subtext:    '555555',
};

// ─── Helper: Bold Colored Text ────────────────────────────────────────────────
const bold = (text, color = COLORS.dark, size = 22) =>
    new TextRun({ text, bold: true, color, size });

const normal = (text, color = COLORS.dark, size = 20) =>
    new TextRun({ text, color, size });

const italic = (text, color = COLORS.subtext, size = 20) =>
    new TextRun({ text, italics: true, color, size });

// ─── Helper: Section Heading ──────────────────────────────────────────────────
const sectionHeading = (text) =>
    new Paragraph({
        children: [new TextRun({ text, bold: true, color: COLORS.primary, size: 28, font: 'Calibri' })],
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 360, after: 120 },
        border: {
            bottom: { style: BorderStyle.SINGLE, size: 6, color: COLORS.accent, space: 4 }
        }
    });

const subHeading = (text) =>
    new Paragraph({
        children: [new TextRun({ text, bold: true, color: COLORS.accent, size: 24, font: 'Calibri' })],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 100 },
    });

// ─── Helper: Body Paragraph ───────────────────────────────────────────────────
const bodyPara = (text, spacing = { before: 80, after: 80 }) =>
    new Paragraph({
        children: [normal(text)],
        spacing,
        alignment: AlignmentType.JUSTIFIED,
    });

// ─── Helper: Bullet Point ─────────────────────────────────────────────────────
const bullet = (text, level = 0) =>
    new Paragraph({
        children: [normal('• ', COLORS.accent), normal(text)],
        spacing: { before: 60, after: 60 },
        indent: { left: 360 + level * 360 },
    });

// ─── Helper: Key-Value Row ────────────────────────────────────────────────────
const kvRow = (key, value, shade = COLORS.white) =>
    new TableRow({
        children: [
            new TableCell({
                children: [new Paragraph({ children: [bold(key, COLORS.dark, 20)], spacing: { before: 60, after: 60 }, indent: { left: 100 } })],
                width: { size: 35, type: WidthType.PERCENTAGE },
                shading: { fill: shade, type: ShadingType.SOLID },
                verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
                children: [new Paragraph({ children: [normal(value, COLORS.dark, 20)], spacing: { before: 60, after: 60 }, indent: { left: 100 } })],
                width: { size: 65, type: WidthType.PERCENTAGE },
                shading: { fill: shade, type: ShadingType.SOLID },
                verticalAlign: VerticalAlign.CENTER,
            }),
        ],
    });

// ─── Helper: Table Header Row ─────────────────────────────────────────────────
const headerRow = (cols, widths) =>
    new TableRow({
        tableHeader: true,
        children: cols.map((col, i) =>
            new TableCell({
                children: [new Paragraph({ children: [bold(col, COLORS.white, 20)], spacing: { before: 80, after: 80 }, indent: { left: 80 }, alignment: AlignmentType.CENTER })],
                width: { size: widths[i], type: WidthType.PERCENTAGE },
                shading: { fill: COLORS.primary, type: ShadingType.SOLID },
                verticalAlign: VerticalAlign.CENTER,
            })
        ),
    });

const dataRow = (cells, widths, shade = COLORS.white) =>
    new TableRow({
        children: cells.map((cell, i) =>
            new TableCell({
                children: [new Paragraph({ children: [normal(cell, COLORS.dark, 19)], spacing: { before: 70, after: 70 }, indent: { left: 80 } })],
                width: { size: widths[i], type: WidthType.PERCENTAGE },
                shading: { fill: shade, type: ShadingType.SOLID },
                verticalAlign: VerticalAlign.CENTER,
            })
        ),
    });

// ─── Helper: Spacer ───────────────────────────────────────────────────────────
const spacer = (space = 200) =>
    new Paragraph({ children: [], spacing: { before: space, after: space } });

// ─── Helper: URL Link ─────────────────────────────────────────────────────────
const hyperlink = (text, url) =>
    new ExternalHyperlink({
        children: [new TextRun({ text, color: COLORS.accent, underline: { type: UnderlineType.SINGLE }, size: 20 })],
        link: url,
    });

// ═══════════════════════════════════════════════════════════════════════════════
// BUILD DOCUMENT
// ═══════════════════════════════════════════════════════════════════════════════
async function buildDocument() {

    // ── Cover Page ──────────────────────────────────────────────────────────
    const coverPage = [
        spacer(800),
        new Paragraph({
            children: [new TextRun({ text: 'CAPSTONE PROJECT REPORT', bold: true, color: COLORS.primary, size: 52, font: 'Calibri' })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
        }),
        new Paragraph({
            children: [new TextRun({ text: 'E-Commerce QA Automation Suite', bold: true, color: COLORS.accent, size: 36, font: 'Calibri' })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 },
        }),
        new Paragraph({
            children: [italic('Automated Testing Framework using Playwright & JavaScript', COLORS.subtext, 24)],
            alignment: AlignmentType.CENTER,
            spacing: { after: 600 },
        }),
        new Paragraph({
            border: { top: { style: BorderStyle.SINGLE, size: 6, color: COLORS.accent } },
            spacing: { after: 400 },
        }),
        new Paragraph({
            children: [bold('Author: ', COLORS.dark, 24), normal('Abhishek Das', COLORS.dark, 24)],
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
        }),
        new Paragraph({
            children: [bold('Project: ', COLORS.dark, 22), normal('Wipro Capstone Project', COLORS.dark, 22)],
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
        }),
        new Paragraph({
            children: [bold('Date: ', COLORS.dark, 22), normal(new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }), COLORS.dark, 22)],
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
        }),
        new Paragraph({
            children: [bold('Target Application: ', COLORS.dark, 22), normal('AutomationExercise.com', COLORS.dark, 22)],
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
        }),
        new Paragraph({
            children: [bold('Repository: ', COLORS.dark, 22), hyperlink('github.com/Abhisdas/Capstone_project_Wipro', 'https://github.com/Abhisdas/Capstone_project_Wipro')],
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
        }),
        new Paragraph({
            children: [bold('Live Report: ', COLORS.dark, 22), hyperlink('abhisdas.github.io/Capstone_project_Wipro', 'https://abhisdas.github.io/Capstone_project_Wipro/')],
            alignment: AlignmentType.CENTER,
            spacing: { after: 600 },
        }),
        new Paragraph({ children: [new PageBreak()] }),
    ];

    // ── 1. Executive Summary ─────────────────────────────────────────────────
    const executiveSummary = [
        sectionHeading('1. Executive Summary'),
        bodyPara(
            'This project demonstrates a production-grade, end-to-end automation testing framework built using ' +
            'Playwright and JavaScript for the AutomationExercise e-commerce web application. The framework ' +
            'automates both UI (end-to-end) and API test scenarios, validating the full user journey — from ' +
            'registration and login through product discovery, cart management, checkout, and customer support.'
        ),
        bodyPara(
            'The framework adopts the Page Object Model (POM) design pattern to ensure clean separation between ' +
            'page interactions and test logic, making it highly scalable and maintainable. Cross-browser execution ' +
            'is supported across Chromium, Firefox, and WebKit. Comprehensive Allure reporting with trend history ' +
            'is integrated, and a fully automated CI/CD pipeline is implemented using GitHub Actions with automatic ' +
            'deployment of reports to GitHub Pages.'
        ),
        bodyPara(
            'The project successfully executed 125 test cases locally with a 100% pass rate, and 192 test cases ' +
            'on GitHub CI infrastructure with a 99.47% pass rate — validating the robustness and reliability of ' +
            'the automation suite across multiple environments and browser engines.'
        ),
        spacer(100),
        new Paragraph({
            children: [bold('Key Highlights:', COLORS.primary, 22)],
            spacing: { before: 120, after: 80 },
        }),
        bullet('125 test cases executed locally — 100% pass rate (Chromium)'),
        bullet('192 test cases executed on GitHub CI — 99.47% pass rate (Chromium + Firefox)'),
        bullet('9 functional modules covered with comprehensive test scenarios'),
        bullet('Full CI/CD pipeline with automated report publishing to GitHub Pages'),
        bullet('Page Object Model architecture ensuring maintainability and scalability'),
        bullet('Dual reporting: Allure dashboards + Playwright HTML reports'),
        spacer(200),
    ];

    // ── 2. Technology Stack ──────────────────────────────────────────────────
    const techStack = [
        sectionHeading('2. Technology Stack'),
        bodyPara('The following technologies form the backbone of this automation framework:'),
        spacer(100),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            layout: TableLayoutType.FIXED,
            rows: [
                headerRow(['Component', 'Technology', 'Version / Notes'], [30, 35, 35]),
                dataRow(['Test Runner',        'Playwright',           'v1.40+'],                    [30,35,35], COLORS.lightBlue),
                dataRow(['Language',           'JavaScript',           'ES2020+ (Node.js 18+)'],     [30,35,35], COLORS.white),
                dataRow(['HTTP Client',        'Axios',                'v1.6.0+ (API testing)'],     [30,35,35], COLORS.lightBlue),
                dataRow(['Reporting',          'Allure + Playwright HTML', 'Dual report system'],    [30,35,35], COLORS.white),
                dataRow(['CI/CD',              'GitHub Actions',       'Ubuntu Latest runner'],      [30,35,35], COLORS.lightBlue),
                dataRow(['Report Hosting',     'GitHub Pages',         'Auto-published per run'],    [30,35,35], COLORS.white),
                dataRow(['Design Pattern',     'Page Object Model',    'POM architecture'],          [30,35,35], COLORS.lightBlue),
                dataRow(['Version Control',    'Git & GitHub',         'github.com/Abhisdas'],      [30,35,35], COLORS.white),
                dataRow(['IDE',                'VS Code',              'With Playwright extension'], [30,35,35], COLORS.lightBlue),
                dataRow(['Package Manager',    'npm',                  'With package-lock.json'],   [30,35,35], COLORS.white),
            ],
        }),
        spacer(200),
    ];

    // ── 3. Framework Architecture ────────────────────────────────────────────
    const architecture = [
        sectionHeading('3. Framework Architecture'),
        subHeading('3.1 Design Pattern — Page Object Model (POM)'),
        bodyPara(
            'The framework strictly follows the Page Object Model (POM) design pattern. Each web page or ' +
            'component of the AutomationExercise application is represented by a dedicated JavaScript class ' +
            'in the pages/ directory. These classes encapsulate all locators (selectors) and interactions ' +
            '(actions) for that page, so test cases remain clean, readable, and do not contain any UI-specific code.'
        ),
        spacer(80),
        subHeading('3.2 Page Object Classes'),
        spacer(60),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                headerRow(['Page Class', 'File', 'Responsibilities'], [25, 30, 45]),
                dataRow(['AccountGateway',    'auth.page.js',    'Login, signup, logout actions & validations'],      [25,30,45], COLORS.lightBlue),
                dataRow(['StorefrontManager', 'catalog.page.js', 'Product search, browse, add-to-cart operations'],   [25,30,45], COLORS.white),
                dataRow(['HelpDeskPortal',    'support.page.js', 'Contact form interactions and field validations'],  [25,30,45], COLORS.lightBlue),
            ],
        }),
        spacer(120),
        subHeading('3.3 Project Directory Layout'),
        new Paragraph({
            children: [
                new TextRun({ text:
`.
├── .github/
│   └── workflows/
│       └── playwright.yml      # CI/CD pipeline definition
├── api/
│   └── api-client.js           # Axios HTTP client configuration
├── data/
│   ├── login-data.js           # Parameterized login test datasets
│   ├── product-data.js         # Product test input data
│   └── signup-data.js          # Signup test datasets
├── fixtures/
│   └── base-fixture.js         # Custom Playwright test fixtures
├── pages/
│   ├── auth.page.js            # AccountGateway POM class
│   ├── catalog.page.js         # StorefrontManager POM class
│   └── support.page.js         # HelpDeskPortal POM class
├── tests/
│   ├── auth/                   # Authentication & registration (15 tests)
│   ├── cart-management/        # Shopping cart operations (15 tests)
│   ├── checkout-process/       # Checkout flow validation (15 tests)
│   ├── customer-support/       # Help desk form tests (15 tests)
│   ├── product-catalog/        # Product browsing & search (19 tests)
│   ├── user-profile/           # User account page (15 tests)
│   └── Addon/
│       ├── api/                # REST API endpoint tests (5 tests)
│       ├── payment-validation/ # Payment page elements (5 tests)
│       └── shipping-delivery/  # Delivery page structure (10 tests)
├── playwright.config.js        # Playwright configuration
├── package.json                # Dependencies & npm scripts
└── README.md                   # Project documentation`,
                    font: 'Courier New', size: 17, color: COLORS.dark }),
            ],
            border: {
                top:    { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent },
                bottom: { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent },
                left:   { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent },
                right:  { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent },
            },
            shading: { fill: COLORS.lightGray, type: ShadingType.SOLID },
            spacing: { before: 100, after: 100 },
            indent: { left: 200 },
        }),
        spacer(200),
    ];

    // ── 4. Modules Covered ───────────────────────────────────────────────────
    const modules = [
        sectionHeading('4. Modules Covered & Test Coverage'),
        bodyPara('The automation suite covers 9 functional modules of the AutomationExercise e-commerce platform. ' +
            'The 6 core modules reside at the top level of the tests/ directory, while 3 additional modules are ' +
            'organized under tests/Addon/ for modularity.'),
        spacer(100),
        subHeading('4.1 Core Test Modules (tests/)'),
        spacer(80),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                headerRow(['#', 'Module', 'Test Files', 'Coverage Areas'], [6, 24, 12, 58]),
                dataRow(['1', 'Authentication',    '15', 'Login, logout, signup, validation, data-driven login, session management, form elements, contact link, subscription'], [6,24,12,58], COLORS.lightBlue),
                dataRow(['2', 'Cart Management',   '15', 'Add to cart, remove items, quantity update, cart persistence, navigation, accessibility, URL validation, breadcrumb, empty cart'], [6,24,12,58], COLORS.white),
                dataRow(['3', 'Checkout Process',  '15', 'Checkout navigation, page load, header/footer, navbar, API link, contact/home/products links, subscription, empty checkout'], [6,24,12,58], COLORS.lightBlue),
                dataRow(['4', 'Customer Support',  '15', 'Contact form fields (name, email, subject, message), file upload, submit ticket, page title/URL, navbar, footer, subscription'], [6,24,12,58], COLORS.white),
                dataRow(['5', 'Product Catalog',   '19', 'Search, browse, product details (name, price, brand, condition, availability), catalog heading/list, navigation, invalid search'], [6,24,12,58], COLORS.lightBlue),
                dataRow(['6', 'User Profile',      '15', 'Login/signup page visibility, form elements, URL validation, navigation, navbar, footer, subscription, catalog & support links'], [6,24,12,58], COLORS.white),
                dataRow(['', 'SUBTOTAL', '94', '6 core modules — primary test coverage'], [6,24,12,58], COLORS.lightGreen),
            ],
        }),
        spacer(160),
        subHeading('4.2 Addon Modules (tests/Addon/)'),
        spacer(80),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                headerRow(['#', 'Module', 'Test Files', 'Coverage Areas'], [6, 24, 12, 58]),
                dataRow(['7', 'REST API Testing',      '5',  'GET /productsList (status 200), GET /brandsList (status 200), payload validation, response structure'], [6,24,12,58], COLORS.lightBlue),
                dataRow(['8', 'Payment Validation',    '5',  'Cart visibility, footer/navbar visibility, products link, subscription section on payment page'], [6,24,12,58], COLORS.white),
                dataRow(['9', 'Shipping & Delivery',   '10', 'Breadcrumb, cart navigation, catalog/contact/home/login links, navbar, footer, page title, subscription'], [6,24,12,58], COLORS.lightBlue),
                dataRow(['', 'SUBTOTAL', '20', '3 addon modules — supplementary coverage'], [6,24,12,58], COLORS.lightGreen),
            ],
        }),
        spacer(160),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                headerRow(['GRAND TOTAL', '9 Modules', '114 Test Files', '125+ Test Cases (multi-browser)'], [20, 20, 20, 40]),
            ],
        }),
        spacer(200),
    ];

    // ── 5. Test Results ──────────────────────────────────────────────────────
    const testResults = [
        sectionHeading('5. Test Execution Results'),
        subHeading('5.1 Local Execution Results'),
        bodyPara('Tests were executed locally on a Windows machine using Chromium browser via the Playwright test runner. ' +
            'All 125 test cases passed successfully, achieving a perfect 100% pass rate.'),
        spacer(80),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                headerRow(['Metric', 'Result'], [45, 55]),
                kvRow('Total Test Cases',    '125',                      COLORS.white),
                kvRow('Tests Passed',        '125 ✓',                    COLORS.lightGreen),
                kvRow('Tests Failed',        '0',                        COLORS.white),
                kvRow('Pass Rate',           '100% 🟢',                  COLORS.lightGreen),
                kvRow('Browser',             'Chromium (Desktop Chrome)', COLORS.white),
                kvRow('Execution Duration',  '13 minutes 33 seconds',    COLORS.white),
                kvRow('Platform',            'Local Machine — Windows',   COLORS.white),
                kvRow('Reporting Tool',      'Allure Report',             COLORS.white),
            ],
        }),
        spacer(160),
        subHeading('5.2 GitHub CI Execution Results'),
        bodyPara('Tests were executed automatically on GitHub Actions CI infrastructure (Ubuntu Latest) triggered by a push ' +
            'to the main branch. Cross-browser execution ran across Chromium and Firefox simultaneously with 4 parallel workers.'),
        spacer(80),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                headerRow(['Metric', 'Result'], [45, 55]),
                kvRow('Total Test Cases',    '192',                          COLORS.white),
                kvRow('Tests Passed',        '191 ✓',                        COLORS.lightGreen),
                kvRow('Tests Failed',        '1 (flaky network on CI)',       COLORS.white),
                kvRow('Pass Rate',           '99.47% 🟢',                    COLORS.lightGreen),
                kvRow('Browsers',            'Chromium + Firefox',            COLORS.white),
                kvRow('Parallel Workers',    '4 workers',                     COLORS.white),
                kvRow('Execution Duration',  '3 minutes 02 seconds',          COLORS.white),
                kvRow('Platform',            'GitHub Actions — Ubuntu Latest', COLORS.white),
                kvRow('Report Deployment',   'GitHub Pages (auto-published)', COLORS.white),
                kvRow('Live Report URL',     'abhisdas.github.io/Capstone_project_Wipro', COLORS.white),
            ],
        }),
        spacer(160),
        subHeading('5.3 Comparative Summary'),
        spacer(80),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                headerRow(['Environment', 'Total Tests', 'Passed', 'Failed', 'Pass Rate', 'Duration'], [20,15,12,12,18,23]),
                dataRow(['Local (Windows)', '125', '125', '0', '100%',   '13m 33s'], [20,15,12,12,18,23], COLORS.lightGreen),
                dataRow(['GitHub CI (Ubuntu)', '192', '191', '1', '99.47%', '3m 02s'], [20,15,12,12,18,23], COLORS.lightBlue),
            ],
        }),
        spacer(200),
    ];

    // ── 6. CI/CD Pipeline ────────────────────────────────────────────────────
    const cicd = [
        sectionHeading('6. CI/CD Pipeline'),
        subHeading('6.1 Overview'),
        bodyPara('A complete Continuous Integration and Continuous Delivery (CI/CD) pipeline is implemented using ' +
            'GitHub Actions. The pipeline is defined in .github/workflows/playwright.yml and is fully automated — ' +
            'it triggers on every push to the main branch, every pull request, and can also be triggered manually ' +
            'from the GitHub Actions UI.'),
        spacer(100),
        subHeading('6.2 Pipeline Triggers'),
        bullet('Push to main or master branch — automatic trigger'),
        bullet('Pull Request targeting main or master — automatic trigger'),
        bullet('workflow_dispatch — manual trigger from GitHub Actions UI'),
        spacer(100),
        subHeading('6.3 Pipeline Steps'),
        spacer(80),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                headerRow(['Step', 'Action', 'Description'], [8, 30, 62]),
                dataRow(['1', 'Checkout Repository',         'Pulls source code using actions/checkout@v4'],                          [8,30,62], COLORS.lightBlue),
                dataRow(['2', 'Setup Node.js (LTS)',         'Installs Node.js LTS version on the Ubuntu runner'],                    [8,30,62], COLORS.white),
                dataRow(['3', 'Install Dependencies',        'Runs npm ci for clean, reproducible installs'],                         [8,30,62], COLORS.lightBlue),
                dataRow(['4', 'Install Playwright Browsers', 'Downloads Chromium, Firefox, WebKit with OS dependencies'],             [8,30,62], COLORS.white),
                dataRow(['5', 'Run Playwright Tests',        'Executes full test suite — continues even on failure (continue-on-error)'], [8,30,62], COLORS.lightBlue),
                dataRow(['6', 'Get Allure History',          'Fetches historical Allure results from gh-pages branch'],               [8,30,62], COLORS.white),
                dataRow(['7', 'Generate Allure Report',      'Builds Allure HTML dashboard; keeps last 20 run histories'],            [8,30,62], COLORS.lightBlue),
                dataRow(['8', 'Deploy to GitHub Pages',      'Publishes Allure report live to GitHub Pages via JamesIves action'],    [8,30,62], COLORS.white),
                dataRow(['9', 'Upload Playwright Report',    'Stores Playwright HTML report as artifact for 30 days'],                [8,30,62], COLORS.lightBlue),
                dataRow(['10','Upload Allure Results',       'Stores raw Allure result JSON files as artifact for 30 days'],          [8,30,62], COLORS.white),
            ],
        }),
        spacer(160),
        subHeading('6.4 CI/CD Configuration Details'),
        spacer(80),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                headerRow(['Configuration', 'Value'], [40, 60]),
                kvRow('Runner OS',            'ubuntu-latest',                           COLORS.white),
                kvRow('Job Timeout',          '60 minutes',                              COLORS.lightBlue),
                kvRow('Parallel Workers',     '4 (CI) / 1 (Local)',                      COLORS.white),
                kvRow('Retry on Failure',     '1 retry in CI, 0 locally',               COLORS.lightBlue),
                kvRow('Report History Kept',  'Last 20 Allure runs',                     COLORS.white),
                kvRow('Artifact Retention',   '30 days (HTML + Allure results)',         COLORS.lightBlue),
                kvRow('GitHub Token Perms',   'contents: write (for Pages deployment)',  COLORS.white),
            ],
        }),
        spacer(200),
    ];

    // ── 7. Achievements ──────────────────────────────────────────────────────
    const achievements = [
        sectionHeading('7. Achievements'),
        spacer(80),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                headerRow(['#', 'Achievement', 'Details'], [6, 35, 59]),
                dataRow(['1', 'Cross-Browser Automation',     'Tests run on Chromium, Firefox, and WebKit engines in CI and locally'], [6,35,59], COLORS.lightBlue),
                dataRow(['2', 'UI & API Testing',             'Both UI end-to-end tests and REST API endpoint validation using Axios'], [6,35,59], COLORS.white),
                dataRow(['3', 'Page Object Model',            'Clean POM architecture with 3 reusable page classes'], [6,35,59], COLORS.lightBlue),
                dataRow(['4', 'Data-Driven Testing',          'Parameterized login/signup tests using external data files'], [6,35,59], COLORS.white),
                dataRow(['5', 'Allure Reporting',             'Interactive Allure dashboards with trend graphs, history, and analytics'], [6,35,59], COLORS.lightBlue),
                dataRow(['6', 'Playwright HTML Reports',      'Built-in Playwright HTML report for quick failure diagnosis'], [6,35,59], COLORS.white),
                dataRow(['7', 'GitHub Actions CI/CD',         'Fully automated pipeline triggered on every push to main'], [6,35,59], COLORS.lightBlue),
                dataRow(['8', 'GitHub Pages Deployment',      'Live Allure report auto-published at abhisdas.github.io/Capstone_project_Wipro'], [6,35,59], COLORS.white),
                dataRow(['9', 'Parallel Execution',           '4 workers in CI for faster feedback cycle (3m vs 13m locally)'], [6,35,59], COLORS.lightBlue),
                dataRow(['10','Failure Diagnostics',          'Auto screenshots and traces captured on test failures'], [6,35,59], COLORS.white),
                dataRow(['11','100% Local Pass Rate',         'All 125 test cases pass on local Chromium execution'], [6,35,59], COLORS.lightBlue),
                dataRow(['12','99.47% CI Pass Rate',          '191/192 tests pass on GitHub Actions cross-browser run'], [6,35,59], COLORS.white),
                dataRow(['13','Modular Test Organisation',    '9 modules — 6 core + 3 addon — for clean project structure'], [6,35,59], COLORS.lightBlue),
                dataRow(['14','Custom Fixtures',              'Reusable base-fixture.js for consistent test setup and teardown'], [6,35,59], COLORS.white),
            ],
        }),
        spacer(200),
    ];

    // ── 8. Conclusion ────────────────────────────────────────────────────────
    const conclusion = [
        sectionHeading('8. Conclusion'),
        bodyPara(
            'This capstone project successfully demonstrates modern, industry-standard test automation practices ' +
            'using Playwright and JavaScript. The framework is designed to be scalable, maintainable, and ' +
            'production-ready — incorporating the Page Object Model for clean code architecture, Allure for ' +
            'comprehensive reporting, and GitHub Actions for continuous integration and delivery.'
        ),
        bodyPara(
            'The suite validates the complete user journey of the AutomationExercise e-commerce platform — ' +
            'covering authentication, product discovery, cart management, checkout, customer support, user profile, ' +
            'API endpoints, payment pages, and shipping information. With 125 local test cases achieving a perfect ' +
            '100% pass rate and 192 CI test cases achieving 99.47% pass rate, the framework demonstrates both ' +
            'thoroughness and reliability.'
        ),
        bodyPara(
            'The integration with GitHub Actions ensures that every code change is automatically validated against ' +
            'the full test suite across multiple browsers, and the Allure report is automatically published to ' +
            'GitHub Pages — making results instantly accessible to all stakeholders without any manual steps.'
        ),
        bodyPara(
            'This project proves that Playwright, combined with a well-structured framework architecture and ' +
            'modern DevOps practices, can deliver a robust, enterprise-grade automation solution that is both ' +
            'developer-friendly and business-valuable.'
        ),
        spacer(200),
        new Paragraph({
            children: [bold('Live Allure Dashboard: ', COLORS.dark, 20), hyperlink('https://abhisdas.github.io/Capstone_project_Wipro/', 'https://abhisdas.github.io/Capstone_project_Wipro/')],
            spacing: { before: 80, after: 60 },
        }),
        new Paragraph({
            children: [bold('GitHub Repository: ', COLORS.dark, 20), hyperlink('https://github.com/Abhisdas/Capstone_project_Wipro', 'https://github.com/Abhisdas/Capstone_project_Wipro')],
            spacing: { before: 60, after: 80 },
        }),
    ];

    // ── Assemble all sections ────────────────────────────────────────────────
    const allChildren = [
        ...coverPage,
        ...executiveSummary,
        new Paragraph({ children: [new PageBreak()] }),
        ...techStack,
        ...architecture,
        new Paragraph({ children: [new PageBreak()] }),
        ...modules,
        new Paragraph({ children: [new PageBreak()] }),
        ...testResults,
        new Paragraph({ children: [new PageBreak()] }),
        ...cicd,
        new Paragraph({ children: [new PageBreak()] }),
        ...achievements,
        new Paragraph({ children: [new PageBreak()] }),
        ...conclusion,
    ];

    const doc = new Document({
        styles: {
            default: {
                document: {
                    run: { font: 'Calibri', size: 22, color: COLORS.dark },
                },
            },
        },
        sections: [{
            properties: {
                page: {
                    margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 },
                },
            },
            headers: {
                default: new Header({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({ text: 'Capstone Project Report — E-Commerce QA Automation Suite', color: COLORS.accent, size: 18, italics: true }),
                                new TextRun({ text: '    |    Author: Abhishek Das', color: COLORS.subtext, size: 18, italics: true }),
                            ],
                            alignment: AlignmentType.RIGHT,
                            border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent } },
                        }),
                    ],
                }),
            },
            footers: {
                default: new Footer({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({ text: 'Wipro Capstone Project  |  Confidential  |  Page ', color: COLORS.subtext, size: 16 }),
                                new PageNumberElement(),
                            ],
                            alignment: AlignmentType.CENTER,
                            border: { top: { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent } },
                        }),
                    ],
                }),
            },
            children: allChildren,
        }],
    });

    return doc;
}

// ── Main ─────────────────────────────────────────────────────────────────────
(async () => {
    try {
        console.log('📝 Building report document...');
        const doc = await buildDocument();
        const buffer = await Packer.toBuffer(doc);
        const outputPath = 'Capstone_Project_Report.docx';
        fs.writeFileSync(outputPath, buffer);
        console.log(`✅ Report generated successfully: ${outputPath}`);
        console.log(`📄 File size: ${(buffer.length / 1024).toFixed(1)} KB`);
    } catch (err) {
        console.error('❌ Failed to generate report:', err);
        process.exit(1);
    }
})();
