import { test, expect } from '@playwright/test';

test('User should signup successfully via API', async ({ request }) => {

    const email =
        `api${Date.now()}@test.com`;

    const response =
        await request.post('/auth/signup', {

            data: {

                name: 'API User',

                email,

                password: 'Password@123',

                phone: '9876543210',

                gender: 'MALE'

            }

        });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.email).toBe(email);

});