import {CreateAccountPage} from "./08-createAccountPage";

export class ViewAccountPage extends CreateAccountPage{

    async verifyAccountName(){
        const AccName =await this.page.innerText("//span[text()='Account Name']/following::td/span")//Elder cousin to Younger cousin //span[text()='Account Name']/parent::td/following-sibling::td/span"
        
        console.log(AccName);
    //    await this.page.waitForTimeout(3000)
        

    }
}