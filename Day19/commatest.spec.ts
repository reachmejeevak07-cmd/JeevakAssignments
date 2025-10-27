import test  from "@playwright/test";
import {parse} from "csv-parse/sync"
import fs from "fs"

test.describe.serial(`Login tests in serial mode`,async () => {
    
let records : any[] = parse(fs.readFileSync("Data/test.csv"),{columns:true,skip_empty_lines:true})

for(let data of records){

test(`Login test using CSV ${data.tcid}`,async ({page}) => {
    
     await page.goto(`https://login.salesforce.com/?locale=in`)

    /* First set of data */
    await page.locator("#username").fill(data.username) // fill(credentials[0].Username) 

    await page.locator("#password").fill(data.password) //fill(credentials[0].Password) 
})
}
})