const { test, expect } = require('@playwright/test');
const apiClient = require('../../api/apiClient');

test('Get All Products API', async () => {
    const response = await apiClient.get('/productsList');
    expect(response.status).toBe(200);
});
