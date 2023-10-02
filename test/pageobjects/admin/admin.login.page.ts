import {$} from '@wdio/globals'



class AdminLoginPage{

    get usernameInput(){
        return $('//input[@name="username"]');
    }
    get passwordInput(){
        return $('//input[@name="password"]');
    }

    get loginBtn(){
        return $('//input[@value = "Log in"]');
    }
    get loginPlaceholder(){
        return $('//h1');
    }

    public async login(username:string, password:string){
        await expect(this.usernameInput).toBeExisting();
        (await this.usernameInput).setValue(username);
        (await this.passwordInput).setValue(password);
        await expect(this.loginBtn).toBeClickable();
        (await this.loginBtn).click();
    }
}
export default new AdminLoginPage();