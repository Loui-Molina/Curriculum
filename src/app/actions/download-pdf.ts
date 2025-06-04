'use server';

import puppeteer, {LaunchOptions} from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export async function downloadCvAsPdf() {
    let browser = null;
    try {
        const executablePath = process.env.NODE_ENV === 'production'
            ? await chromium.executablePath()
            : puppeteer.executablePath();

        browser = await puppeteer.launch({
            args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
            executablePath: executablePath,
            headless: chromium.headless,
            ignoreHTTPSErrors: true,
        } as LaunchOptions);
        const page = await browser.newPage();

        const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
            : 'http://localhost:3000';

        await page.goto(`${baseUrl}/`, {waitUntil: 'networkidle0'});

        await page.evaluate(() => {
            const button = document.getElementById('download-pdf-button');
            if (button) {
                button.style.display = 'none';
            }
        });

        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20mm',
                right: '20mm',
                bottom: '20mm',
                left: '20mm',
            },
        });

        return pdfBuffer;

    } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('Failed to generate PDF. ' + (error as Error).message);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}