import { test } from '@playwright/test';

import { loginAs } from '../../utils/login';

import { AuditLogsPage } from '../../pages/auditlogs/AuditLogsPage';

test('Root should view audit logs', async ({ page }) => {

    const auditLogs = new AuditLogsPage(page);

    await loginAs(page, 'root');

    await auditLogs.open();

    await auditLogs.verifyLogsLoaded();

    await auditLogs.verifyLogsVisible();

});