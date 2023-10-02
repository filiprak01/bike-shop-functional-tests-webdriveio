import { expect } from '@wdio/globals'
import {browser} from '@wdio/globals'
import homePage from '../pageobjects/application/home.page.js'
import loginPage from '../pageobjects/application/login.page.js'
describe('My login test', () => {
    it('Should log in with valid credentials', async () => {
    
        browser.setWindowSize(1920,1080);
        browser.url('http://localhost:8000/')
        await homePage.goToLogin();
        await loginPage.login("user2", "TestPassword");
        await expect(homePage.messageSuccessAlert).toExist();
        await expect(homePage.messageSuccessAlert).toHaveTextContaining("Logged In Sucessfully!!");
        await homePage.logout();
    })
})



