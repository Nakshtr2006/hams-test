import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';
import { DashboardPage } from '../../../pages/dashboard/DashboardPage';

test('MANAGER should not see Audit Logs', async ({ page }) => {

    const dashboard = new DashboardPage(page);

    await loginAs(page, 'manager');

    await dashboard.verifyAuditLogsButtonHidden();

});