import { test } from '@playwright/test';

import { loginAs } from '../../utils/login';

import { DashboardPage } from '../../pages/dashboard/DashboardPage';

test('Customer should login successfully', async ({ page }) => {

    const dashboardPage = new DashboardPage(page);

    await loginAs(page, 'customer');

    await dashboardPage.verifyLoaded();

    await dashboardPage.verifyTokenStored();

    await dashboardPage.verifyRoleStored();

});