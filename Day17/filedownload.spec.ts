import { test } from "@playwright/test";

import path from "path";
// const __driname = path.resolve()
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

test(`File Download`,async ({page}) => {
    

    await page.goto(`https://leafground.com/file.xhtml`);

    const filePromise = page.waitForEvent("download")

    await page.getByText("Download",{exact:true}).click() // This click action will download the file

    const fDown = await filePromise // resolving the promise ones after the download action is complete

    /* Option1 : Relative path */

   //await fDown.saveAs("Data/SepPW.png"); // to use cutomized filename 

   // await fDown.saveAs(`Data/${fDown.suggestedFilename()}`);// to use original filenname

    /* Option2 : Absolute path */
//Downloading the file to Data folder using absolute path of the current file.

// await fDown.saveAs(path.join(__dirname,`../../Data/Absolute.png`)) // __dirname--> current module, to use cutomized filename


// await fDown.saveAs(path.join(__dirname,`../../Data`,fDown.suggestedFilename()))
await fDown.saveAs(path.join(__dirname,`../../Data`,fDown.suggestedFilename()))

//Option3 :

// await fDown.saveAs("D:\\DownloadedImage.png")


})


// import { test  } from "@playwright/test";
// import path from 'path';
// const __driname = path.resolve()
// test(file uploadind and downloading,async ({page}) => {

// await page.goto(https://leafground.com/file.xhtml);

// const filedownload=page.waitForEvent('download')
// await page.getByText(Download,{exact:true}).click()
// const fido = await filedownload
// // await fido.saveAs("Data/trinathfile.png")
// //  await fido.saveAs(Data/${fido.suggestedFilename()});
//  await fido.saveAs(path.join(__driname,../../Data/Absolute.png))
// })