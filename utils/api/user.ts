import { APIRequestContext, expect } from '@playwright/test';

export async function createUserApi(
    request: APIRequestContext,
    token: string,
    email: string
) {

    const response = await request.post('/users', {

        headers: {
            Authorization: `Bearer ${token}`
        },

        data: {

            name: 'API User',

            email,

            password: 'Password@123',

            phone: '9876543210',

            gender: 'MALE',

            role: 'CUSTOMER',

            active: true

        }

    });

    expect(response.ok()).toBeTruthy();

    return await response.json();

}

export async function deleteUserApi(
    request: APIRequestContext,
    token: string,
    id: number
) {

    const response = await request.delete(`/users/${id}`, {

        headers: {
            Authorization: `Bearer ${token}`
        }

    });

    expect(response.ok()).toBeTruthy();

}