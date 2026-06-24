import { test, expect } from '@playwright/test';

import { loginAsApi } from '../../../utils/api/auth';

test('Should reject invalid user', async ({ request }) => {

    const token =
        await loginAsApi(request, 'root');

    const response =
        await request.post('/users', {

            headers: {
                Authorization: `Bearer ${token}`
            },

            data: {

                name: '',

                email: '',

                password: '',

                phone: '',

                gender: 'MALE',

                role: 'CUSTOMER',

                active: true

            }

        });

    expect(response.status()).toBe(400);

});