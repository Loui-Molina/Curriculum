'use server';

import chromium from '@sparticuz/chromium';

export async function downloadCvAsPdf() {
    let browser = null;
    try {
        const isProduction = process.env.NODE_ENV === 'production';

        let puppeteerModule: typeof import('puppeteer') | typeof import('puppeteer-core');

        if (isProduction) {
            puppeteerModule = await import('puppeteer-core');
        } else {
            puppeteerModule = await import('puppeteer');
        }

        const launchOptions = {
            args: isProduction ? [...chromium.args, '--hide-scrollbars', '--disable-web-security'] : [],
            headless: isProduction ? chromium.headless : true,
            ignoreHTTPSErrors: true,
            executablePath: isProduction
                ? await chromium.executablePath()
                : puppeteerModule.executablePath(),
        };

        browser = await puppeteerModule.launch(launchOptions);

        const page = await browser.newPage();

        console.log({url: process.env.NEXT_PUBLIC_VERCEL_URL})
        const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
            : 'http://localhost:3000';

        await page.goto(`${baseUrl}/`, {waitUntil: 'networkidle0'});

        return await page.pdf({
            printBackground: false,
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm',
            },
            width: 900,
            height: 6150,
            omitBackground: true,
            outline: false,
        });

    } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('Failed to generate PDF. ' + (error as Error).message);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}