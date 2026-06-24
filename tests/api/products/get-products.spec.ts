import { test, expect } from '@playwright/test';

import { loginAsApi } from '../../../utils/api/auth';

test('Should get all products', async ({ request }) => {

    const token =
        await loginAsApi(request, 'root');

    const response =
        await request.get('/products', {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

    expect(response.status()).toBe(200);

    const products =
        await response.json();

    expect(Array.isArray(products))
        .toBeTruthy();

});