// import { expect } from '@wdio/globals'
import {browser} from '@wdio/globals'
import adminLoginPage from '../pageobjects/admin/admin.login.page.js'
import adminHomePage from '../pageobjects/admin/admin.home.page.js'
import adminUserPage from '../pageobjects/admin/admin.user.page.js'
describe('My account removal test', () => {
    it('Should remove account from db using admin panel', async () => {
    
        browser.setWindowSize(1920,1080);
        browser.url('http://localhost:8000/admin/');
        await adminLoginPage.login("admin", "admin" );
        await adminHomePage.goToUserPanel();
        await adminUserPage.removeAccount("test");
    })
})