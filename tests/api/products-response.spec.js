const { test, expect } = require('@playwright/test');
const apiClient = require('../../api/api-client');

test('Verify Products API Response Details', async () => {
    const res = await apiClient.get('/productsList');
    expect(res.data.products).toBeTruthy();
});
