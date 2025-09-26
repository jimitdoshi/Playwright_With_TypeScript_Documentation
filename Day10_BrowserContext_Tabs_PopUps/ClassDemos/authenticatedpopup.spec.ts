import {test,expect,Page} from "@playwright/test";

test("authenticated popup",async({browser})=>{

    const context=await browser.newContext({httpCredentials:{username:'admin', password:'admin'}});


    const page=await context.newPage();


    // https://the-internet.herokuapp.com/basic_auth'
    // http://username:password@the-internet.herokuapp.com/basic_auth


    
    //Approach 1: directly pass login along with url
    //await page.goto('https://the-internet.herokuapp.com/basic_auth');
    /*await page.goto('http://admin:admin@the-internet.herokuapp.com/basic_auth');

    await page.waitForLoadState(); // wait ofr page loaded completely
    
    await expect(page.locator('text=Congratulations')).toBeVisible();

    await page.waitForTimeout(5000);
  */

    
    //Approach 2: pass the login along with browser context
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
 
    await page.waitForLoadState(); // wait ofr page loaded completely
    
    await expect(page.locator('text=Congratulations')).toBeVisible();

    await page.waitForTimeout(5000);
    
   
})