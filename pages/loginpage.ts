import { expect } from "@playwright/test";

export class login
{   userid="//label[text()='Username']";
    password="//input[@name='password']";
    button="//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']";
    ErrorMsg="//div[@class='oxd-alert-content oxd-alert-content--error']";
    page:any;

    constructor(page:any)
    {
        this.page=page;
    }
    async login(userid:string ,password:string)
    {
        
        await this.setusername(userid);
        await this.setpassword(password);
        await this.clicklogin();
    }
    async setusername(userid:string )
    {
   await this.page.locator("//input[@name='username']").fill(userid);

}
async setlabel(userid:string)
{
await this.page.getByLabel('username').fill(userid);
}
    
    
  async setpassword (password:string)
    
    {
        
        await this.page.locator("//input[@name='password']").fill(password);
    }
    async clicklogin()
    {
       await this.page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click(); 
    }
}