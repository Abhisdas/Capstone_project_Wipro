const { test, expect } = require('../../../fixtures/base-fixture');
const httpService = require('../../../api/api-client');

test('Confirm Brands Endpoint Responds with HTTP 200', async () => {
    const result = await httpService.get('/brandsList');
    expect(result.status).toBe(200);
});
