import { Page, expect } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    async open() {

        await this.page.goto('/login.html');

    }

    async login(
        email: string,
        password: string
    ) {

        await this.page.fill('#email', email);

        await this.page.fill('#password', password);

        await this.page.click('button');

    }

    async verifyLoginSuccess() {

        await expect(this.page)

            .toHaveURL(/dashboard.html/);

    }

    async verifyLoginFailed() {

        await expect(

            this.page.locator('#message')

        ).toContainText('Login Failed');

    }

}