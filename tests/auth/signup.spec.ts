import { test } from '@playwright/test';

import { SignupPage } from '../../pages/auth/SignupPage';

test('User should signup successfully', async ({ page }) => {

    const signupPage = new SignupPage(page);

    const email = `playwright${Date.now()}@test.com`;

    await signupPage.open();

    await signupPage.signup(
        'Playwright User',
        email,
        'Password@123',
        '9876543210',
        'MALE'
    );

    await signupPage.verifySignupSuccess();

});