import { test, expect } from '@playwright/test';

import { loginAsApi } from '../../../utils/api/auth';

import {
    createUserApi,
    deleteUserApi
} from '../../../utils/api/user';

test('Should delete user', async ({ request }) => {

    const token =
        await loginAsApi(request, 'root');

    const email =
        `delete${Date.now()}@test.com`;

    const user =
        await createUserApi(
            request,
            token,
            email
        );

    await deleteUserApi(
        request,
        token,
        user.id
    );

    const response =
        await request.get('/users', {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

    const users =
        await response.json();

    expect(
        users.some(
            (u: any) => u.id === user.id
        )
    ).toBeFalsy();

});