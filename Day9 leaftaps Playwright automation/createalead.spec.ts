import { test } from "@playwright/test";
test("Test create a lead", async({page})  => { 
  await page.goto(`http://leaftaps.com/opentaps/control/main`);
  await page.locator(`#username`).fill(`Demosalesmanager`);
  await page.locator(`#password`).fill(`crmsfa`);
  await page.locator(`.decorativeSubmit`).click();
  
  //user login completed
  
  await page.locator('text=CRM/SFA').click();
  await page.locator('text=Leads').first().click(); // await page.locator(`text=Leads`).click();  this line made me a error becauase there are multiple Leads black text found in the page.
  await page.locator(`text=Create Lead`).click();
  await page.locator(`#createLeadForm_companyName`).fill(`solutions pvt ltd`);
  await page.locator(`#createLeadForm_firstName`).fill(`jeevakkumar`);
  await page.locator(`#createLeadForm_lastName`).fill(`R`);
  await page.locator(`#createLeadForm_personalTitle`).fill(`mr`);
  await page.locator(`#createLeadForm_generalProfTitle`).fill(`Senior Test engineer`);
  await page.locator(`#createLeadForm_annualRevenue`).fill(`50000`);
  await page.locator(`#createLeadForm_departmentName`).fill(`Quality Assurance`);
  await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(`8015362614`);
  await page.locator(`.smallSubmit`).click();
  await page.waitForTimeout(8000);
  const title2 = await page.title();
  console.log('Page Title:', title2);
  await page.waitForTimeout(8000);
})




