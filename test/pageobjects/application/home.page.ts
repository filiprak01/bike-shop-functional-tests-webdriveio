import {$} from '@wdio/globals'

class HomePage {

    public get loginBtn(){
        return $('//a[@href = "/login"]');
    }

    public get registerBtn(){
        return $('//a[@href = "/register"]');
    }
    public get messageSuccessAlert(){
        return $('//div[contains(@class, "success")]');
    }
    public get logoutBtn(){
        return $('//a[@href="/logout"]');
    }
    public async goToLogin(){
        await this.loginBtn.click();
    }
    public async goToRegistration(){
        (await this.registerBtn).click();
    }
    
    public async logout(){
        await expect(this.logoutBtn).toExist();
        (await this.logoutBtn).click();
    }
}

export default new HomePage();