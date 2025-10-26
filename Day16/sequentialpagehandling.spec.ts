import { test } from "@playwright/test";


test(`Handling tabs in sequential way of handling windows`,async ({page,context}) => {
    
    await page.goto(`https://www.flipkart.com/`);
    await page.locator(`//input[@placeholder="Search for Products, Brands and More"]`).fill("Phones");
    const searchBox = page.locator(`//input[@placeholder="Search for Products, Brands and More"]`)
    await searchBox.press("Enter") // Keyboard action to press ENTER button
    await page.waitForTimeout(3000)
    const newPage =  context.waitForEvent(`page`) // Event listener ready to capture the new page when it is clicked
    await page.locator(`//div[contains(text(),"OPPO K13x 5G 6000mAh and 45W SUPERVOOC Charger & AI (Breeze Blue, 128 GB)")]`).click()
    const childPage = await newPage
    console.log(await page.title()); //List of mobile phone page
    console.log(await childPage.title());

    const newPrice = await childPage.locator(`//div[contains(@class,"bqj CxhGGd")]`).innerText()
    console.log(newPrice);

    
    //await childPage.locator(`//div[contains(@class,"bqj CxhGGd ")]`).innerText()
})