import { test, expect } from '@playwright/test';
import { loginAsApi } from '../../../utils/api/auth';

test('Customer should not access audit logs', async ({ request }) => {

    const token =
        await loginAsApi(request, 'customer');

    const response =
        await request.get('/audit-logs', {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

    expect(response.status()).toBe(403);

});