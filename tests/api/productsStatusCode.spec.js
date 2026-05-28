const { test, expect } = require('@playwright/test');
const apiClient = require('../../api/apiClient');

test('Verify Products API Status Code', async () => {
    const response = await apiClient.get('/productsList');
    expect(response.status).toBe(200);
});
