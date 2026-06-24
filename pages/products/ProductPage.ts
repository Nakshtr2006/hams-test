import { expect, Page } from '@playwright/test';

export class ProductPage {

    constructor(private page: Page) {}

    async open() {

        await this.page.goto('/products.html');

    }

    // ==========================
    // CRUD
    // ==========================

    async createProduct(
        name: string,
        description: string,
        price: number,
        stock: number
    ) {

        await this.page.fill('#name', name);

        await this.page.fill('#description', description);

        await this.page.fill('#price', price.toString());

        await this.page.fill('#stock', stock.toString());

        await this.page.locator('#createButton').click();

    }

    async editLatestProduct(
        newName: string
    ) {

        await this.page
            .getByTestId('edit-button')
            .last()
            .click();

        await this.page.fill('#name', newName);

        await this.page.locator('#createButton').click();

    }

    async deleteLatestProduct() {

        this.page.once(
            'dialog',
            dialog => dialog.accept()
        );

        await this.page
            .getByTestId('delete-button')
            .last()
            .click();

    }

    // ==========================
    // CRUD Verification
    // ==========================

    async verifyProductVisible(
        productName: string
    ) {

        await expect(
            this.page.locator('#products')
        ).toContainText(productName);

    }

    async verifyProductDeleted(
        productName: string
    ) {

        await expect(
            this.page.locator('#products')
        ).not.toContainText(productName);

    }

    async verifyCreateSuccess() {

        await expect(
            this.page.locator('#message')
        ).toContainText(
            'Product Created Successfully'
        );

    }

    async verifyUpdateSuccess() {

        await expect(
            this.page.locator('#message')
        ).toContainText(
            'Product Updated Successfully'
        );

    }

    async verifyDeleteSuccess() {

        await expect(
            this.page.locator('#message')
        ).toContainText(
            'Product Deleted Successfully'
        );

    }

    // ==========================
    // RBAC
    // ==========================

    async verifyCreateSectionVisible() {

        await expect(
            this.page.locator('#createProductSection')
        ).toBeVisible();

    }

    async verifyCreateSectionHidden() {

        await expect(
            this.page.locator('#createProductSection')
        ).toBeHidden();

    }

    async verifyEditButtonsVisible() {

        await expect(
            this.page.getByTestId('edit-button').first()
        ).toBeVisible();

    }

    async verifyEditButtonsHidden() {

        await expect(
            this.page.getByTestId('edit-button')
        ).toHaveCount(0);

    }

    async verifyDeleteButtonsVisible() {

        await expect(
            this.page.getByTestId('delete-button').first()
        ).toBeVisible();

    }

    async verifyDeleteButtonsHidden() {

        await expect(
            this.page.getByTestId('delete-button')
        ).toHaveCount(0);

    }

    async editProduct(

        productName: string,

        newName: string

    ) {

        const productCard =

            this.page.locator(

                `[data-product-name="${productName}"]`

            );

        await productCard

            .getByTestId('edit-button')

            .click();

        await this.page.fill(

            '#name',

            newName

        );

        await this.page.locator(

            '#createButton'

        ).click();

    }

    async deleteProduct(
        productName: string
    ) {

        this.page.once(
            'dialog',
            dialog => dialog.accept()
        );

        const productCard =
            this.page.locator(
                `[data-product-name="${productName}"]`
            );

        await productCard
            .getByTestId('delete-button')
            .click();

    }

}