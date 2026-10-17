import{test,expect}from '@playwright/test';
import { login } from '../pages/loginpage';

test('invalid login test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const loginpg = new login(page);

    await loginpg.login('invaliduser', 'invalidpass');

 await expect(page.locator("//p[contains(@class,'oxd-alert-content-text')]")
    ).toBeVisible();
    
});



test('valid login test', async ({page})=>

{await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const loginpg=new login(page);
    await loginpg.login('Admin', 'admin123');
    
}
);