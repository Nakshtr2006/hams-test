import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { UserPage } from '../../../pages/users/UserPage';

test('EMPLOYEE permissions', async ({ page }) => {

    const users = new UserPage(page);

    await loginAs(page, 'employee');

    await users.open();

    await users.verifyCreateSectionHidden();

    await users.verifyEditButtonsHidden();

    await users.verifyDeleteButtonsHidden();

});