import { test, expect } from '@playwright/test';

import { users } from '../../../test-data/users';

test('Duplicate email signup should fail', async ({ request }) => {

    const response =
        await request.post('/auth/signup', {

            data: {

                name: 'Duplicate',

                email: users.customer.email,

                password: 'Password@123',

                phone: '9876543210',

                gender: 'MALE'

            }

        });

    expect(response.status()).toBe(400);

    const body =
        await response.json();

    expect(body.message)
        .toContain('Email');

});