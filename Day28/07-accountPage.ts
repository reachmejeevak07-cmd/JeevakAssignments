import {selectors} from "./locators"
import {HomePage } from "./03-homePage"

export class AccountPage extends HomePage {

    async clickAccountCreate(){
        await this.page.click(selectors.createAccountBtn)
    }
    
}