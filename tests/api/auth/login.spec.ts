import { test, expect } from '@playwright/test';

import { users } from '../../../test-data/users';

test('Root should login successfully via API', async ({ request }) => {

    const response = await request.post('/auth/login', {

        data: {

            email: users.root.email,

            password: users.root.password

        }

    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.token).toBeTruthy();

    expect(body.email).toBe(users.root.email);

    expect(body.role).toBe('ROOT');

});