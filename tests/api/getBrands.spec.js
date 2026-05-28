const { test, expect } = require('@playwright/test');
const apiClient = require('../../api/apiClient');

test('Get All Brands API', async () => {
    const response = await apiClient.get('/brandsList');
    expect(response.status).toBe(200);
});
