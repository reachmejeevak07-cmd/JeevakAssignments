import {test} from "@playwright/test";
test ("test select dropdown", async({page}) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id="username"]`).fill(`Demosalesmanager`);
    await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    // user login completed
      
    await page.locator(`//a[contains(text(),"CRM")]`).click(); //used Partial Text based xpath to select black color font click button because text based await page.locator(//a[text()="CRM/SFA"]).click(); xpath is not working 
    await page.locator(`//a[text()="Leads"]`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`accenture`);
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`gkm`);
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill('c');
    await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill(`mr`);
    await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill(`test engineer`);
    await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill(`500000`);
    await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill(`8015362614`);
    await page.selectOption(`//select[@id="createLeadForm_currencyUomId"]`,{value:"INR"});
    await page.selectOption(`//select[@id="createLeadForm_generalCountryGeoId"]`,{value:"IND"});
    await page.locator(`//input[@class="smallSubmit"]`).click();
    await page.waitForTimeout(8000);
    const title3 = await page.title();
    console.log('Page Title:', title3);
    await page.waitForTimeout(8000);
})