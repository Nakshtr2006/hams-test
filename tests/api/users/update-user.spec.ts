import { test, expect } from '@playwright/test';

import { loginAsApi } from '../../../utils/api/auth';

import { createUserApi } from '../../../utils/api/user';

test('Should update user', async ({ request }) => {

    const token =
        await loginAsApi(request, 'root');

    const email =
        `update${Date.now()}@test.com`;

    const user =
        await createUserApi(
            request,
            token,
            email
        );

    const response =
        await request.put(`/users/${user.id}`, {

            headers: {
                Authorization: `Bearer ${token}`
            },

            data: {

                name: 'Updated User',

                phone: '9999999999',

                gender: 'MALE',

                role: 'CUSTOMER',

                active: true

            }

        });

    expect(response.status()).toBe(200);

    const updated =
        await response.json();

    expect(updated.name)
        .toBe('Updated User');

});