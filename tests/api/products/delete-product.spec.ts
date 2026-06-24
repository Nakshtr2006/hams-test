import { test, expect } from '@playwright/test';

import { loginAsApi } from '../../../utils/api/auth';

import {
    createProductApi,
    deleteProductApi
} from '../../../utils/api/product';

test('Should delete product', async ({ request }) => {

    const token =
        await loginAsApi(request, 'root');

    const product =
        await createProductApi(
            request,
            token,
            `Delete Product ${Date.now()}`
        );

    await deleteProductApi(
        request,
        token,
        product.id
    );

    const response =
        await request.get('/products', {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

    expect(response.status()).toBe(200);

    const products =
        await response.json();

    expect(
        products.some(
            (p: any) => p.id === product.id
        )
    ).toBeFalsy();

});