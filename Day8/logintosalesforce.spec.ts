import { chromium, test } from "@playwright/test";
test("Test to launch a browser", async({}) => { 

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

   await page.goto(`https://login.salesforce.com/`);
   await page.locator(`#username`).fill(`reachmejeevak07752@agentforce.com`);
   await page.locator(`#password`).fill(`Jayasree@1603`);
   await page.locator(`#Login`).click();
   await page.waitForTimeout(10000)
   console.log('Page Title:', await page.title());
   console.log('Current URL:', page.url());
   await browser.close();
 })