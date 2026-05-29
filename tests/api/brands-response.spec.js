const { test, expect } = require('@playwright/test');
const httpService = require('../../api/api-client');

test('Fetch Brands Catalog and Validate Payload', async () => {
    const result = await httpService.get('/brandsList');
    expect(result.data.brands).toBeTruthy();
});
