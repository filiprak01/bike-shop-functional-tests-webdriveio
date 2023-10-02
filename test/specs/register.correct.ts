import { expect } from '@wdio/globals'
import {browser} from '@wdio/globals'
import homePage from '../pageobjects/application/home.page.js'
import registrationPage from '../pageobjects/application/registration.page.js'
describe('My login test', () => {
    it('Should not log in with wrong credentials', async () => {
    
        browser.setWindowSize(1920,1080);
        browser.url('http://localhost:8000/');
        await homePage.goToRegistration();
        await registrationPage.register("test", "123456789", "filip.rak4.4.2001@gmail.com", "TestPassword", "TestPassword");
        await expect(homePage.messageSuccessAlert).toHaveTextContaining("Your Account has been created succesfully!! Please check your email to confirm your email address in order to activate your account.")

    })
})