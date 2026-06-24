import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    timeout: 30000,

    expect: {
        timeout: 5000,
    },

    fullyParallel: false,

    retries: 0,

    reporter: [
        ['html', { outputFolder: 'reports/html-report' }],
        ['list']
    ],

    use: {

        baseURL: 'http://localhost:8080',

        browserName: 'chromium',

        headless: false,

        ignoreHTTPSErrors: true,

        viewport: {
            width: 1440,
            height: 900
        },

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'retain-on-failure',

        actionTimeout: 10000,

        navigationTimeout: 30000,

        testIdAttribute: 'data-testid',

        launchOptions: {
            slowMo: 300
        }
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
});