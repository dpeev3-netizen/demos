import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));

    try {
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
        console.log("Navigated to Home page");

        // Attempt clicking Properties link desktop
        await page.evaluate(() => {
            const links = Array.from(document.querySelectorAll('a'));
            const propsLink = links.find(l => l.getAttribute('href') === '/properties');
            if (propsLink) {
                console.log("Clicking /properties link");
                propsLink.click();
            } else {
                console.log("Could not find /properties link");
            }
        });

        await new Promise(r => setTimeout(r, 2000));
        console.log("Current URL after click:", page.url());

    } catch (err) {
        console.error("Test failed:", err);
    } finally {
        await browser.close();
    }
})();
