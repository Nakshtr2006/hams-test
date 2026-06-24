import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { UserPage } from '../../../pages/users/UserPage';

test('ROOT should delete a user', async ({ page }) => {

    const users = new UserPage(page);

    const userName =
        `Delete User ${Date.now()}`;

    const email =
        `delete${Date.now()}@test.com`;

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

    await users.deleteUser(
        userName
    );

    await users.verifyDeleteSuccess();

    await users.verifyUserDeleted(
        userName
    );

});