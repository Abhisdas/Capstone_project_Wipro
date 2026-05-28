const { test, expect } = require('@playwright/test');
const apiClient = require('../../api/api-client');

test('Query All Brands Endpoint', async () => {
    const res = await apiClient.get('/brandsList');
    expect(res.status).toBe(200);
});
