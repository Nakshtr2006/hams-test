import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';
import { DashboardPage } from '../../../pages/dashboard/DashboardPage';
import { AuditLogsPage } from '../../../pages/auditlogs/AuditLogsPage';

test('ROOT should access Audit Logs', async ({ page }) => {

    const dashboard = new DashboardPage(page);
    const auditLogs = new AuditLogsPage(page);

    await loginAs(page, 'root');

    await dashboard.verifyAuditLogsButtonVisible();

    await dashboard.goToAuditLogs();

    await auditLogs.verifyLogsLoaded();

    await auditLogs.verifyLogsVisible();

});