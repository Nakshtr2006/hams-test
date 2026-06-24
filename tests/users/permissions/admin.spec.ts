import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { UserPage } from '../../../pages/users/UserPage';

test('ADMIN permissions', async ({ page }) => {

    const users = new UserPage(page);

    await loginAs(page, 'admin');

    await users.open();

    await users.verifyCreateSectionHidden();

    await users.verifyEditButtonsVisible();

    await users.verifyDeleteButtonsHidden();

});