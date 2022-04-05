const { makeAssertProxy } = require("nightwatch/lib/api");

module.exports={
    '@tags': ['news'],
    'Designory Navigation test cases': async function (browser){
    const newsInActive = '.nav-wrapper.scroll > nav > ul > li:nth-child(6) > a'
    const newsActive = '.active > a'
     
    browser
        .url('https://www.designory.com/')
        .waitForElementVisible('.header-toggle',6000)
    browser.moveToElement('css selector','.header-toggle', 10, 10)
    browser.click('.header-toggle')
    browser.waitForElementVisible(newsInActive ,5000)
    browser.click(newsInActive, function(print)
    {
        browser.waitForElementVisible(newsActive ,5000)
        
    })
    
    browser.click(newsActive, function(print)
    {
        browser.pause(3000);
        browser.assert.urlContains('news')
        
    })
    
    const inActiveClickResult = await browser.clickAndHold(newsInActive);
    console.log(' click Inactive result', inActiveClickResult);
    browser.waitForElementVisible(newsInActive ,5000)
    const ActiveClickResult = await browser.clickAndHold(newsActive);
    console.log(' click Active result', ActiveClickResult);
    browser.pause(3000);
    browser.assert.urlContains('news')

    browser.isPresent(newsInActive);
    browser.click(newsInActive, function(print)
    {
        browser.pause(3000);
        browser.assert.urlContains('news')
    })
    
    browser.isPresent(newsActive)
    browser.click(newsInActive, function(print)
    {
        browser.pause(3000);
        browser.assert.urlContains('news')
    })
        
    }
}