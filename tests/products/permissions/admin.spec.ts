import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { DashboardPage } from '../../../pages/dashboard/DashboardPage';
import { ProductPage } from '../../../pages/products/ProductPage';

test('ADMIN permissions', async ({ page }) => {

    const dashboard = new DashboardPage(page);
    const products = new ProductPage(page);

    await loginAs(page, 'admin');

    await dashboard.verifyLoaded();

    await dashboard.verifyProductsButtonVisible();

    await dashboard.verifyUsersButtonVisible();

    await dashboard.verifyAuditLogsButtonHidden();

    await dashboard.goToProducts();

    await products.verifyCreateSectionVisible();

    await products.verifyEditButtonsVisible();

    await products.verifyDeleteButtonsVisible();

});