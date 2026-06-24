import { test, expect } from '@playwright/test';

test('Should reject users request without token', async ({ request }) => {

    const response =
        await request.get('/users');

    expect(response.status()).toBe(403);

});