import { test, expect } from '@playwright/test';

test('Invalid login should fail', async ({ request }) => {

    const response = await request.post('/auth/login', {

        data: {

            email: 'wrong@test.com',

            password: 'WrongPassword123'

        }

    });

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body.message)
        .toContain('Invalid');

});