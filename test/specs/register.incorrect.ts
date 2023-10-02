import { expect } from '@wdio/globals'
import {browser} from '@wdio/globals'
import homePage from '../pageobjects/application/home.page.js'
import registrationPage from '../pageobjects/application/registration.page.js'
describe('My registration test', () => {
    it('Should not register with wrong credentials', async () => {
    
        browser.setWindowSize(1920,1080);
        browser.url('http://localhost:8000/');
        await homePage.goToRegistration();
        await registrationPage.register("user2", "123456789", "test@test.pl", "TestPassword", "TestPassword");
        await expect(registrationPage.errorMessageAlert).toHaveTextContaining("Username already exist! Please try some other username.")
        await registrationPage.register("user3", "123456789", "test@test.pl", "Password", "TestPassword");
        await expect(registrationPage.errorMessageAlert).toHaveTextContaining("Passwords didn't match!!")
        await registrationPage.register("user3", "123456789", "filip.rak.20001@gmail.com", "TestPassword", "TestPassword");
        await expect(registrationPage.errorMessageAlert).toHaveTextContaining("Email Already Registered!!")
        
        
    })
})