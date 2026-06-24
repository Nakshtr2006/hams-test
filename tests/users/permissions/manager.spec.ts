import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { UserPage } from '../../../pages/users/UserPage';

test('MANAGER permissions', async ({ page }) => {

    const users = new UserPage(page);

    await loginAs(page, 'manager');

    await users.open();

    await users.verifyCreateSectionHidden();

    await users.verifyEditButtonsVisible();

    await users.verifyDeleteButtonsHidden();

});