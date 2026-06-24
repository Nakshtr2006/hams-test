import { test, expect } from '@playwright/test';

test('Should reject request without token', async ({ request }) => {

    const response =
        await request.get('/products');

    expect(response.status()).toBe(403);

});