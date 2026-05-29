const { test, expect } = require('../../fixtures/base-fixture');
const AccountGateway = require('../../pages/auth.page');

const accountCredentials = [
    {
        email: 'abhis.capstone.tester@gmail.com',
        password: 'T3stAcc0unt!',
        expected: 'Logout'
    },
    {
        email: 'random.fake.addr@hotmail.com',
        password: 'n0tR3alPwd',
        expected: 'Your email or password is incorrect!'
    }
];

test.describe('Parameterized Sign-In Outcome Verification', () => {
    accountCredentials.forEach(account => {
        test(`Sign-in attempt using: ${account.email}`, async ({ page }) => {
            const gateway = new AccountGateway(page);
            await gateway.launchHomePage();
            await gateway.goToAuthPortal();
            await gateway.executeSignIn(account.email, account.password);

            if (account.expected === 'Logout') {
                await expect(gateway.sessionEndLink).toBeVisible();
            } else {
                await expect(gateway.credentialMismatchAlert).toContainText(account.expected);
            }
        });
    });
});
