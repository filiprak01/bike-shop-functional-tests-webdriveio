import { expect } from '@wdio/globals'
import {browser} from '@wdio/globals'
import homePage from '../pageobjects/application/home.page.js'
import loginPage from '../pageobjects/application/login.page.js'
describe('My login test', () => {
    it('Should log in with wrong credentials', async () => {
    
        browser.setWindowSize(1920,1080);
        browser.url('http://localhost:8000/')
        await homePage.goToLogin();
        //wrong username
        await loginPage.login("bad_user", "TestPassword");
        await expect(loginPage.errorMessage).toHaveTextContaining("Bad Credentials!!");
        //wrong password
        await loginPage.login("user2", "wrong_password");
        await expect(loginPage.errorMessage).toHaveTextContaining("Bad Credentials!!");
    })
})