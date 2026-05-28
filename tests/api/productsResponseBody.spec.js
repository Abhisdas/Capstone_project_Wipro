const { test, expect } = require('@playwright/test');
const apiClient = require('../../api/apiClient');

test('Verify Products API Response Body', async () => {
    const response = await apiClient.get('/productsList');
    expect(response.data.products).toBeTruthy();
});
