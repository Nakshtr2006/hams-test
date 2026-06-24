import { expect, Page } from '@playwright/test';

export class SignupPage {

    constructor(private page: Page) {}

    async open() {
        await this.page.goto('/signup.html');
    }

    async signup(
        name: string,
        email: string,
        password: string,
        phone: string,
        gender: string
    ) {

        await this.page.fill('#name', name);

        await this.page.fill('#email', email);

        await this.page.fill('#password', password);

        await this.page.fill('#phone', phone);

        await this.page.selectOption('#gender', gender);

        await this.page.getByRole('button', {
            name: 'Signup'
        }).click();
    }

    async verifySignupSuccess() {

        await expect(
            this.page.locator('#message')
        ).toContainText('Signup Successful');

        await this.page.waitForURL(/login\.html/);

    }

    async verifyDuplicateEmailError() {

        await expect(
            this.page.locator('#message')
        ).toContainText('Email already exists');

    }

    async verifyRedirectedToLogin() {

        await expect(this.page)
            .toHaveURL(/login\.html/);

    }

}