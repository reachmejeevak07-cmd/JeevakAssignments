import { AccountPage } from "./07-accountPage";
import {selectors} from "./locators";

export class CreateAccountPage extends AccountPage{

    async enterMandatoryDetails(){
        await this.page.fill(selectors.Accountname, "Jeevakaccount")
    
    }

    async clickSubmit(){
        await this.page.click(selectors.submitbtn)
    }
    

}