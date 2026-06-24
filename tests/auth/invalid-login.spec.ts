import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/auth/LoginPage';
import { users } from '../../test-data/users';

test('Should reject invalid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        users.customer.email,
        'WrongPassword123'
    );

    await expect(page.locator('#message'))
        .toContainText('Login Failed');

});