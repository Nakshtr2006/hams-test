import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { DashboardPage } from '../../../pages/dashboard/DashboardPage';
import { ProductPage } from '../../../pages/products/ProductPage';

test('ROOT permissions', async ({ page }) => {

    const dashboard = new DashboardPage(page);
    const products = new ProductPage(page);

    await loginAs(page, 'root');

    await dashboard.verifyLoaded();

    await dashboard.verifyProductsButtonVisible();

    await dashboard.verifyUsersButtonVisible();

    await dashboard.verifyAuditLogsButtonVisible();

    await dashboard.goToProducts();

    await products.verifyCreateSectionVisible();

    await products.verifyEditButtonsVisible();

    await products.verifyDeleteButtonsVisible();

});