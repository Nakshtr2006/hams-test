import { test, expect } from '@playwright/test';

import { loginAsApi } from '../../../utils/api/auth';

test('Should reject invalid product', async ({ request }) => {

    const token =
        await loginAsApi(request, 'root');

    const response =
        await request.post('/products', {

            headers: {
                Authorization: `Bearer ${token}`
            },

            data: {

                name: '',

                description: '',

                price: -100,

                stock: -10,

                active: true

            }

        });

    expect(response.status()).toBe(400);

});