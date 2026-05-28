const { test, expect } = require('@playwright/test');
const apiClient = require('../../api/apiClient');

test('Verify Brands API Response Body', async () => {
    const response = await apiClient.get('/brandsList');
    expect(response.data.brands).toBeTruthy();
});
