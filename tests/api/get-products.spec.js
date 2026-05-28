const { test, expect } = require('@playwright/test');
const apiClient = require('../../api/api-client');

test('Query All Products Endpoint', async () => {
    const res = await apiClient.get('/productsList');
    expect(res.status).toBe(200);
});
