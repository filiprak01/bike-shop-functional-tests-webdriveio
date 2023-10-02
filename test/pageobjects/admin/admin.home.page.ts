import {$} from '@wdio/globals'

class AdminHomePage{

    get pageLabel(){
        return $('//h1[@id="site-name"]');
    }
    get userButton(){
        return $('//th//a[@href="/admin/auth/user/"]');
    }
    get logoutBtn(){
        return $('//a[@href = "/admin/logout/"]');
    }

    public async goToUserPanel(){
        await expect(this.userButton).toBeExisting();
        (await this.userButton).click();
    }

}
export default new AdminHomePage();