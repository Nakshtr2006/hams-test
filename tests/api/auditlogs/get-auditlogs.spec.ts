import { test, expect } from '@playwright/test';
import { loginAsApi } from '../../../utils/api/auth';

test('Root should get audit logs', async ({ request }) => {

    const token = await loginAsApi(request, 'root');

    const response = await request.get('/audit-logs', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    expect(response.status()).toBe(200);

    const logs = await response.json();

    expect(Array.isArray(logs)).toBeTruthy();

});