import { test } from '@playwright/test';

import { loginAs } from '../../../utils/login';
import { ProductPage } from '../../../pages/products/ProductPage';

test('Customer should view products', async ({ page }) => {

    const productPage = new ProductPage(page);

    await loginAs(page, 'customer');

    await productPage.open();

    await productPage.verifyProductVisible('Laptop');

});