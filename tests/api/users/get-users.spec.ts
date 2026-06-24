import { test, expect } from '@playwright/test';

import { loginAsApi } from '../../../utils/api/auth';

test('Should get all users', async ({ request }) => {

    const token =
        await loginAsApi(request, 'root');

    const response =
        await request.get('/users', {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

    expect(response.status()).toBe(200);

    const users =
        await response.json();

    expect(Array.isArray(users)).toBeTruthy();

});