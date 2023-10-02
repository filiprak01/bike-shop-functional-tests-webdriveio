import {$} from '@wdio/globals' 


class LoginPage {

    get loginPlaceholder(){
        return $('//h1');
    }    
    get usernameInput(){
        return $('//input[@id = "username"]');
    }
    get passwordInput(){
        return $('//input[@id = "password"]');
    }

    get errorMessage(){
        return $('//div[contains(@class, "danger")]');
    }

    get logoutBtn(){
        return $('//a[@href="/logout"]');
    }
    public async login(username: string, password: string){
        await expect(this.loginPlaceholder).toBeExisting();
        await expect(this.loginPlaceholder).toHaveTextContaining("Login");
        (await this.usernameInput).setValue(username);
        (await this.passwordInput).setValue(password+'\uE007');
    }
    public async logout(){
        await expect(this.logoutBtn).toExist();
        (await this.logoutBtn).click();
    }
}
export default new LoginPage();