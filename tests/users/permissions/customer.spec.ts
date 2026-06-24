import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { UserPage } from '../../../pages/users/UserPage';

test('CUSTOMER permissions', async ({ page }) => {

    const users = new UserPage(page);

    await loginAs(page, 'customer');

    await users.open();

    await users.verifyCreateSectionHidden();

    await users.verifyEditButtonsHidden();

    await users.verifyDeleteButtonsHidden();

});