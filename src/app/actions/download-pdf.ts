'use server';

import type {LaunchOptions} from 'puppeteer';
import chromium from '@sparticuz/chromium';
import {PDFOptions} from "puppeteer-core";

let puppeteerModule: typeof import('puppeteer');
if (process.env.NODE_ENV === 'production') {
    puppeteerModule = require('puppeteer-core');
} else {
    puppeteerModule = require('puppeteer');
}

export async function downloadCvAsPdf() {
    let browser = null;
    try {
        const isProduction = process.env.NODE_ENV === 'production';

        const launchOptions: LaunchOptions = {
            args: isProduction ? [...chromium.args, '--hide-scrollbars', '--disable-web-security'] : [],
            headless: isProduction ? chromium.headless : true,
            ignoreHTTPSErrors: true,
            executablePath: isProduction
                ? await chromium.executablePath()
                : puppeteerModule.executablePath(),
        } as LaunchOptions;

        browser = await puppeteerModule.launch(launchOptions);

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
        } as PDFOptions);

    } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('Failed to generate PDF. ' + (error as Error).message);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}