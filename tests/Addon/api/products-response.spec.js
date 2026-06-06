const { test, expect } = require('../../../fixtures/base-fixture');
const httpService = require('../../../api/api-client');

test('Fetch Products Catalog and Validate Payload Exists', async () => {
    const result = await httpService.get('/productsList');
    expect(result.data.products).toBeTruthy();
});
