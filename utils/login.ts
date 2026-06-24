import { Page } from "@playwright/test";

import { LoginPage } from "../pages/auth/LoginPage";

import { users } from "../test-data/users";

export async function loginAs(

    page: Page,

    role: keyof typeof users

) {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(

        users[role].email,

        users[role].password

    );

    await loginPage.verifyLoginSuccess();

}