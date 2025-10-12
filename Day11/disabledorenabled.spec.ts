//Breakoutsession (URL : https://leafground.com/input.xhtml)
    //Child relative xpath/parent::parent tagName 

    // tagname[@Attributename="Attribute Value"]

    import {expect, test} from "@playwright/test";
    test ("Verify if text box is disabled or enabled", async({page}) => {

        await page.goto(`https://leafground.com/input.xhtml`);

        const disabled = page.locator(`//input[@placeholder="Disabled"]`)
        await expect(disabled).toBeDisabled();
        const isDisabled = await disabled.isDisabled();
        console.log(`The textbox is disabled: ${isDisabled}`);
    });



