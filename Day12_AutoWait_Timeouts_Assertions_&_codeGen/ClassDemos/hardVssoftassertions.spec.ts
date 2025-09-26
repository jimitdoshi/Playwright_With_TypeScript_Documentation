/*By default, failed assertion will terminate test execution. 
Playwright also supports soft assertions 
failed soft assertions do not terminate test execution, but mark the test as failed. */



import { test, expect } from '@playwright/test';


test('Hard Vs Soft assertions', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');

    //Hard assertions
    /*await expect(page).toHaveTitle('Demo Web Shop2'); //failed
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
    
    const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();
  */

    //Soft assertions
    await expect.soft(page).toHaveTitle('Demo Web Shop2'); //failed
    await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');
    
    const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect.soft(logo).toBeVisible();

    await page.waitForTimeout(5000);


});


 