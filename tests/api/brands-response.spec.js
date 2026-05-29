const { test, expect } = require('../../fixtures/base-fixture');
const httpService = require('../../api/api-client');

test('Fetch Brands Catalog and Validate Payload', async () => {
    const result = await httpService.get('/brandsList');
    expect(result.data.brands).toBeTruthy();
});
