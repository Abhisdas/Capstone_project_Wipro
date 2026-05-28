const { test, expect } = require('@playwright/test');
const apiClient = require('../../api/api-client');

test('Verify Products API Response Status Code', async () => {
    const res = await apiClient.get('/productsList');
    expect(res.status).toBe(200);
});
