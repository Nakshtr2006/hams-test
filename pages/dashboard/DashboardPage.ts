import { expect, Page } from '@playwright/test';

export class DashboardPage {

    constructor(private page: Page) {}

    async verifyLoaded() {

        await expect(this.page)
            .toHaveURL(/dashboard\.html/);

    }

    async verifyTokenStored() {

        const token = await this.page.evaluate(() =>
            localStorage.getItem('token')
        );

        expect(token).not.toBeNull();

    }

    async verifyRoleStored() {

        const role = await this.page.evaluate(() =>
            localStorage.getItem('role')
        );

        expect(role).toBeTruthy();

    }

    async verifyWelcomeMessage(name: string) {

        await expect(
            this.page.locator('#welcomeMessage')
        ).toContainText(`Welcome ${name}`);

    }

    async verifyRole(role: string) {

        await expect(
            this.page.locator('#roleMessage')
        ).toContainText(`Role: ${role}`);

    }

    async goToProducts() {

        await this.page
            .getByTestId('products-button')
            .click();

    }

    async goToUsers() {

        await this.page
            .getByTestId('users-button')
            .click();

    }

    async goToAuditLogs() {

        await this.page
            .getByTestId('auditlogs-button')
            .click();

    }

    async logout() {

        await this.page
            .getByTestId('logout-button')
            .click();

    }

    async verifyProductsButtonVisible() {

        await expect(
            this.page.getByTestId('products-button')
        ).toBeVisible();

    }

    async verifyUsersButtonVisible() {

        await expect(
            this.page.getByTestId('users-button')
        ).toBeVisible();

    }

    async verifyUsersButtonHidden() {

        await expect(
            this.page.getByTestId('users-button')
        ).toBeHidden();

    }

    async verifyAuditLogsButtonVisible() {

        await expect(
            this.page.getByTestId('auditlogs-button')
        ).toBeVisible();

    }

    async verifyAuditLogsButtonHidden() {

        await expect(
            this.page.getByTestId('auditlogs-button')
        ).toBeHidden();

    }

}