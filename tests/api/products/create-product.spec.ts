import { test, expect } from '@playwright/test';

import { loginAsApi } from '../../../utils/api/auth';

import { createProductApi } from '../../../utils/api/product';

test('Should create product', async ({ request }) => {

    const token =
        await loginAsApi(request, 'root');

    const name =
        `API Product ${Date.now()}`;

    const product =
        await createProductApi(
            request,
            token,
            name
        );

    expect(product.name)
        .toBe(name);

});