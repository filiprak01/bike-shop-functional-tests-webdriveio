import {$} from '@wdio/globals'
import {$$} from '@wdio/globals'
class AdminUserPage{

    get checkboxes(){
        return $$('//input[@type="checkbox"]');
    }
    get userLabels(){
        return $$('//th/a[contains(@href, "change")]');
    }

    get dropDownOptionMenu(){
        return $('//select');
    }
    get deleteUserOption(){
        return $('//option[@value="delete_selected"]');
    }

    get goButton(){
        return $('//button[@name="index"]');
    }
    get deleteConfirmationButton(){
        return $('//input[contains(@value, "sure")]');
    }
    get messageSuccessAlert(){
        return $('//li[@class = "success"]');
    }

    public async removeAccount(username: string){
        let index : number = 0 ;
        let found : boolean = false; 
        const list_len = await this.userLabels.length;
        for (index=0; index < list_len; index ++){
            if(await Promise.resolve((await (await this.userLabels).at(index)?.getText()) === username)){
                found = true;
                break;
            }
        }
        await expect(found).toEqual(true);
        (await this.checkboxes).at(index+1)?.click();
        (await this.dropDownOptionMenu).click();
        await expect(this.deleteUserOption).toBeExisting();
        (await this.deleteUserOption).click();
        (await this.goButton).click();
        await expect(this.deleteConfirmationButton).toBeExisting();
        (await this.deleteConfirmationButton).click();

    }
}
export default new AdminUserPage();
