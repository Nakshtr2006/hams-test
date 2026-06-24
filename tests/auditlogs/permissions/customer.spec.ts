import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';
import { DashboardPage } from '../../../pages/dashboard/DashboardPage';

test('CUSTOMER should not see Audit Logs', async ({ page }) => {

    const dashboard = new DashboardPage(page);

    await loginAs(page, 'customer');

    await dashboard.verifyAuditLogsButtonHidden();

});