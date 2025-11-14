import { test } from "@playwright/test";
import { ViewAccountPage } from "../../Pages/09-viewAccountPage";

test(`Create Account Verification`,async ({page}) => {

     const vp = new ViewAccountPage(page)
    await vp.loadurl(`http://leaftaps.com/opentaps/control/main`)
    await vp.enterCredentials("demoCSR","crmsfa")
    await vp.clickLogin()
    await vp.clickCRM()
    await vp.clickAccount()
    await vp.clickAccountCreate()
    await vp.enterMandatoryDetails()
    await vp.clickSubmit()
    await vp.verifyAccountName()
})