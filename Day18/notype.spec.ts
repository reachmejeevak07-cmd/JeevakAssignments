import { test } from "@playwright/test";
import path from "path";

test.only(`FileUpload with no type=file attribute in DOM`,async ({page}) => {
    
    await page.goto(`https://the-internet.herokuapp.com/upload`);


    const filePromise = page.waitForEvent('filechooser')// Used to get the file and upload it into the application using the fileUpload reference
   
    await page.locator(`//div[@id="drag-drop-upload"]`).click()//After the click the waitForEvent will look for the file to be uploaded using the relative / absolute path


    const fileUpload =await filePromise


   // await fileUpload.setFiles("Data/TestLeaf Logo.png") //Relative path


     await fileUpload.setFiles(path.join(__dirname,`../../Data/TestLeaf Logo.png`))// Absolute Path


})