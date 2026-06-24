import { expect, Page } from '@playwright/test';

export class AuditLogsPage {

    constructor(private page: Page) {}

    async open() {

        await this.page.goto('/auditlogs.html');

    }

    async refreshLogs() {

        await this.page
            .getByTestId('refresh-logs-button')
            .click();

    }

    async goToDashboard() {

        await this.page
            .getByTestId('dashboard-button')
            .click();

    }

    async verifyLogsLoaded() {

        await expect(
            this.page.locator('#message')
        ).toContainText(
            'Audit Logs Loaded Successfully'
        );

    }

    async verifyLogsVisible() {

        await expect(
            this.page
                .getByTestId('audit-log-card')
                .first()
        ).toBeVisible();

    }

    async verifyNoLogsVisible() {

        await expect(
            this.page
                .getByTestId('audit-log-card')
        ).toHaveCount(0);

    }

}
