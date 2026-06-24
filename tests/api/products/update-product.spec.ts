import { test, expect } from '@playwright/test';

import { loginAsApi } from '../../../utils/api/auth';
import {
    createProductApi
} from '../../../utils/api/product';

test('Should update product', async ({ request }) => {

    const token =
        await loginAsApi(request, 'root');

    const product =
        await createProductApi(
            request,
            token,
            `API Product ${Date.now()}`
        );

    const response =
        await request.put(`/products/${product.id}`, {

            headers: {
                Authorization: `Bearer ${token}`
            },

            data: {

                name: 'Updated Product',

                description: 'Updated Description',

                price: 1500,

                stock: 50,

                active: true

            }

        });

    expect(response.status()).toBe(200);

    const updated =
        await response.json();

    expect(updated.name)
        .toBe('Updated Product');

});