import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { UserPage } from '../../../pages/users/UserPage';

test('ROOT should create a user', async ({ page }) => {

    const users = new UserPage(page);

    await loginAs(page, 'root');

    await users.open();

    const email =
        `user${Date.now()}@test.com`;

    await users.createUser(
        'Playwright User',
        email,
        'Password@123',
        '9876543210',
        'MALE',
        'CUSTOMER'
    );

    await users.verifyCreateSuccess();

    await users.verifyUserVisible(
        'Playwright User'
    );

});