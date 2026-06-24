import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';
import { ProductPage } from '../../../pages/products/ProductPage';

test('Admin should create a product', async ({ page }) => {

    const productPage = new ProductPage(page);

    const productName = `Playwright Product ${Date.now()}`;

    await loginAs(page, 'admin');

    await productPage.open();

    await productPage.createProduct(
        productName,
        'Created by Playwright',
        9999,
        25
    );

    await productPage.verifyCreateSuccess();

    await productPage.verifyProductVisible(productName);

});