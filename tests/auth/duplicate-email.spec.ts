import { test, expect } from '@playwright/test';

import { SignupPage } from '../../pages/auth/SignupPage';
import { users } from '../../test-data/users';

test('Should not allow duplicate email signup', async ({ page }) => {

    const signupPage = new SignupPage(page);

    await signupPage.open();

    await signupPage.signup(
        'Duplicate User',
        users.customer.email,
        'Password@123',
        '9876543210',
        'MALE'
    );

    await expect(page.locator('#message'))
        .toContainText('Email already exists');

});