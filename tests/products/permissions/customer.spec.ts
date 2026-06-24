import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { DashboardPage } from '../../../pages/dashboard/DashboardPage';
import { ProductPage } from '../../../pages/products/ProductPage';

test('CUSTOMER permissions', async ({ page }) => {

    const dashboard = new DashboardPage(page);
    const products = new ProductPage(page);

    await loginAs(page, 'customer');

    await dashboard.verifyLoaded();

    await dashboard.verifyProductsButtonVisible();

    await dashboard.verifyUsersButtonHidden();

    await dashboard.verifyAuditLogsButtonHidden();

    await dashboard.goToProducts();

    await products.verifyCreateSectionHidden();

    await products.verifyEditButtonsHidden();

    await products.verifyDeleteButtonsHidden();

});