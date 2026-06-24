import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { UserPage } from '../../../pages/users/UserPage';

test('ROOT should edit a user', async ({ page }) => {

    const users = new UserPage(page);

    const userName =
        `User ${Date.now()}`;

    const email =
        `user${Date.now()}@test.com`;

    await loginAs(page, 'root');

    await users.open();

    await users.createUser(

        userName,

        email,

        'Password@123',

        '9876543210',

        'MALE',

        'CUSTOMER'

    );

    await users.verifyCreateSuccess();

    const newName =
        `Updated ${Date.now()}`;

    await users.editUser(

        userName,

        newName

    );

    await users.verifyUpdateSuccess();

    await users.verifyUserVisible(
        newName
    );

});