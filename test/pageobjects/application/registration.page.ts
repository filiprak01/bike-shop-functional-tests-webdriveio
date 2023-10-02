import {$} from '@wdio/globals'


class RegistrationPage{


    get usernameInput(){
        return $('//input[@id = "username"]');
    }
    get phoneNumberInput(){
        return $('//input[@id = "phone_num"]');
    }

    get emailInput(){
        return $('//input[@id = "email"]');
    }
    get passwordInput(){
        return $('//input[@id = "pass1"]');
    }

    get passwordConfirmationInput(){
        return $('//input[@id = "pass2"]');
    }

    get errorMessageAlert(){
        return $('//div[contains(@class, "danger")]');
    }

    public async register(username:string, phoneNumber: string, email:string, password:string, passwordConfirmation:string){
        await expect(this.usernameInput).toBeExisting();
        (await this.usernameInput).setValue(username);
        (await this.phoneNumberInput).setValue(phoneNumber);
        (await this.emailInput).setValue(email);
        (await this.passwordInput).setValue(password);
        (await this.passwordConfirmationInput).setValue(passwordConfirmation + '\uE007');
    }

}
export default new RegistrationPage();