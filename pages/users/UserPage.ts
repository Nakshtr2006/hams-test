import { expect, Page } from '@playwright/test';

export class UserPage {

    constructor(private page: Page) {}

    async open() {

        await this.page.goto('/users.html');

    }

    async createUser(
        name: string,
        email: string,
        password: string,
        phone: string,
        gender: string,
        role: string
    ) {

        await this.page.fill('#name', name);

        await this.page.fill('#email', email);

        await this.page.fill('#password', password);

        await this.page.fill('#phone', phone);

        await this.page.selectOption('#gender', gender);

        await this.page.selectOption('#role', role);

        await this.page.locator('#createButton').click();

    }

    async editUser(
        userName: string,
        newName: string
    ) {

        const userCard =
            this.page.locator(
                '[data-testid="user-card"]'
            ).filter({
                hasText: userName
            });

        await userCard
            .getByTestId('edit-button')
            .click();

        await this.page.fill(
            '#name',
            newName
        );

        await this.page.selectOption(
            '#gender',
            'MALE'
        );

        await this.page.selectOption(
            '#role',
            'CUSTOMER'
        );

        await this.page.locator(
            '#createButton'
        ).click();

    }

    async deleteUser(
        userName: string
    ) {

        this.page.once(
            'dialog',
            dialog => dialog.accept()
        );

        const userCard =
            this.page.locator(
                '[data-testid="user-card"]'
            ).filter({
                hasText: userName
            });

        await userCard
            .getByTestId('delete-button')
            .click();

    }

    async verifyUserVisible(
        name: string
    ) {

        await expect(
            this.page.locator('#users')
        ).toContainText(name);

    }

    async verifyUserDeleted(
        name: string
    ) {

        await expect(
            this.page.locator('#users')
        ).not.toContainText(name);

    }

    async verifyCreateSuccess() {

        await expect(
            this.page.locator('#message')
        ).toContainText(
            'User Created Successfully'
        );

    }

    async verifyUpdateSuccess() {

        await expect(
            this.page.locator('#message')
        ).toContainText(
            'User Updated Successfully'
        );

    }

    async verifyDeleteSuccess() {

        await expect(
            this.page.locator('#message')
        ).toContainText(
            'User Deleted Successfully'
        );

    }

    async verifyCreateSectionVisible() {

        await expect(
            this.page.locator('#createUserSection')
        ).toBeVisible();

    }

    async verifyCreateSectionHidden() {

        await expect(
            this.page.locator('#createUserSection')
        ).toBeHidden();

    }

    async verifyEditButtonsVisible() {

        await expect(
            this.page.getByTestId('edit-button').first()
        ).toBeVisible();

    }

    async verifyEditButtonsHidden() {

        await expect(
            this.page.getByTestId('edit-button')
        ).toHaveCount(0);

    }

    async verifyDeleteButtonsVisible() {

        await expect(
            this.page.getByTestId('delete-button').first()
        ).toBeVisible();

    }

    async verifyDeleteButtonsHidden() {

        await expect(
            this.page.getByTestId('delete-button')
        ).toHaveCount(0);

    }

}