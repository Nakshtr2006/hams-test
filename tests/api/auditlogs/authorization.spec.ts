import { test, expect } from '@playwright/test';

test('Audit logs should reject anonymous user', async ({ request }) => {

    const response =
        await request.get('/audit-logs');

    expect(response.status()).toBe(403);

});