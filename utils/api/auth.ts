import { APIRequestContext, expect } from '@playwright/test';

import { users } from '../../test-data/users';

export async function loginAsApi(
    request: APIRequestContext,
    role:
        | 'root'
        | 'admin'
        | 'manager'
        | 'employee'
        | 'customer'
) {

    const response = await request.post('/auth/login', {

        data: {

            email: users[role].email,

            password: users[role].password

        }

    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    return body.token;

}