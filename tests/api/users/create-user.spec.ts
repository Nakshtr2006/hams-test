import { test, expect } from '@playwright/test';

import { loginAsApi } from '../../../utils/api/auth';

import { createUserApi } from '../../../utils/api/user';

test('Should create user', async ({ request }) => {

    const token =
        await loginAsApi(request, 'root');

    const email =
        `apiuser${Date.now()}@test.com`;

    const user =
        await createUserApi(
            request,
            token,
            email
        );

    expect(user.email).toBe(email);

});