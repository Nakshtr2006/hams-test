import { APIRequestContext, expect } from '@playwright/test';

export async function createProductApi(
    request: APIRequestContext,
    token: string,
    name: string
) {

    const response = await request.post('/products', {

        headers: {
            Authorization: `Bearer ${token}`
        },

        data: {

            name,

            description: 'Created by API',

            price: 999,

            stock: 25,

            active: true

        }

    });

    expect(response.ok()).toBeTruthy();

    return await response.json();

}

export async function deleteProductApi(
    request: APIRequestContext,
    token: string,
    id: number
) {

    const response = await request.delete(`/products/${id}`, {

        headers: {
            Authorization: `Bearer ${token}`
        }

    });

    expect(response.ok()).toBeTruthy();

}