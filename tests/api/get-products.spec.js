const { test, expect } = require('@playwright/test');
const httpService = require('../../api/api-client');

test('Confirm Products Endpoint Responds with HTTP 200', async () => {
    const result = await httpService.get('/productsList');
    expect(result.status).toBe(200);
});
