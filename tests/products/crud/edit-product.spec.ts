import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';
import { ProductPage } from '../../../pages/products/ProductPage';

test('Root should edit a product', async ({ page }) => {

    const productPage = new ProductPage(page);

    const productName =
        `Playwright ${Date.now()}`;

    const updatedName =
        `Updated ${Date.now()}`;

    await loginAs(page, 'root');

    await productPage.open();

    await productPage.createProduct(

        productName,

        'Playwright Product',

        999,

        10

    );

    await productPage.verifyCreateSuccess();

    await productPage.editProduct(

        productName,

        updatedName

    );

    await productPage.verifyUpdateSuccess();

    await productPage.verifyProductVisible(

        updatedName

    );

});