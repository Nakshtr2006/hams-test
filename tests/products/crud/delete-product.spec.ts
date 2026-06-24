import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';

import { ProductPage } from '../../../pages/products/ProductPage';

test('Root should delete a product', async ({ page }) => {

    const productPage = new ProductPage(page);

    const productName =
        `Delete Product ${Date.now()}`;

    await loginAs(page, 'root');

    await productPage.open();

    await productPage.createProduct(

        productName,

        'Playwright Delete Product',

        999,

        10

    );

    await productPage.verifyCreateSuccess();

    await productPage.verifyProductVisible(
        productName
    );

    await productPage.deleteProduct(

        productName

    );

    await productPage.verifyDeleteSuccess();

    await productPage.verifyProductDeleted(
        productName
    );

});