
//Xpath Parent to child
//select[@id="createLeadForm_dataSourceId"]/option (http://leaftaps.com/crmsfa/control/createLeadForm;jsessionid=1E8CA9BCF5ACE057984C029F11EBD350.jvm1)

//Css Parent to child
//#createLeadForm_dataSourceId>option

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
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`mkg`);
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill('c');
    await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill(`mr`);
    await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill(`test engineer`);
    await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill(`500000`);
    await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill(`8015362614`);
    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{index:3})
    await page.waitForTimeout(8000);

    const dropdownList = page.locator(`#createLeadForm_dataSourceId>option`) // this locator has 13 values
    const dropdowncount =  await dropdownList.count() //13
    console.log(dropdowncount);
    for (let index = 0; index < dropdowncount; index++)
        {
            console.log(await dropdownList.nth(index).innerText()) //Cold Call
    }
     /* dropdownList.nth(0) // 
      dropdownList.nth(1) //(#createLeadForm_dataSourceId>option).nth(1) => Cold Call
       dropdownList.nth(2) //(#createLeadForm_dataSourceId>option).nth(2) => Conference*/
                   
 await page.locator(`//input[@class="smallSubmit"]`).click();
   })

