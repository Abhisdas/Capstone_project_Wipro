const { test, expect } = require('@playwright/test');
const httpService = require('../../api/api-client');

test('Confirm Products API Returns Expected HTTP Code', async () => {
    const result = await httpService.get('/productsList');
    expect(result.status).toBe(200);
});
