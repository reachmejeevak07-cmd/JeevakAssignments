import { test } from "@playwright/test";
test(`Test to handle alerts`,async ({page}) => {
await page.goto(`https://leafground.com/alert.xhtml`);

page.on('dialog',async(alert)=>{


const alertMessage = alert.message()
console.log(`The message inside the alerts says ${alertMessage}`); //Did you call me?

const alertType = alert.type()
console.log(`The alert type is ${alertType}`); //Confirm Alert 

if(alertType==='prompt'){
await alert.accept("jeevakkumar")
}else
await alert.dismiss()
})

await page.locator(`(//span[text()="Show"])[5]`).click(); // CLick the Prompt alert
await page.waitForTimeout(3000)
})