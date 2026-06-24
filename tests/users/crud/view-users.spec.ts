import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { UserPage } from '../../../pages/users/UserPage';

test('ROOT should view users', async ({ page }) => {

    const users = new UserPage(page);

    await loginAs(page, 'root');

    await users.open();

    await users.verifyUserVisible(
        'Nakshtr Gupta'
    );

});