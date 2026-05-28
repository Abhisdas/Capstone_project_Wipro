const { test, expect } = require('@playwright/test');
const apiClient = require('../../api/api-client');

test('Verify Brands API Response Details', async () => {
    const res = await apiClient.get('/brandsList');
    expect(res.data.brands).toBeTruthy();
});
