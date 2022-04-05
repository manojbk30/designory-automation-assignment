const { makeAssertProxy } = require("nightwatch/lib/api");

module.exports={
    '@tags': ['navAll'],
    'Designory Navigation test cases': async function (browser){
     
    browser
        .url('https://www.designory.com/')
        .waitForElementVisible('.header-toggle',6000)
    browser.expect.element('.header-toggle').to.be.present
    var naviExpectedElements = ['work', 'about', 'careers', 'location', 'contact', 'news'];
    browser.moveToElement('css selector','.header-toggle', 10, 10)
    browser.click('.header-toggle')
    browser.elements('css selector', '.nav-wrapper.scroll > nav > ul > li a', function(result)
    {
        for(var i=1; i<=5; i++){
            if (i !=4) {
                browser.moveToElement('.nav-wrapper.scroll > nav > ul > li:nth-child('+i+')', 10, 10)
                browser.click('.nav-wrapper.scroll > nav > ul > li:nth-child('+i+')', function(print)
                    {
            
                    });
                browser.pause(3000);
                browser.assert.urlContains(naviExpectedElements[i-1])
                browser.back()
                .waitForElementVisible('.header-toggle', 5000)
                browser.moveToElement('css selector','.header-toggle', 10, 10)
                browser.click('.header-toggle')
            }  else {
                browser.moveToElement('.nav-wrapper.scroll > nav > ul > li:nth-child('+i+')', 10, 10)
                browser.click('.nav-wrapper.scroll > nav > ul > li:nth-child('+i+')', function(print)
                {
                    
                });
                browser.moveToElement('.nav-wrapper.scroll > nav > ul > li:nth-child('+i+') > ul > li:nth-child(2) > a', 10, 10)
                browser.click('.nav-wrapper.scroll > nav > ul > li:nth-child('+i+') > ul > li:nth-child(2) > a', function(print)
                    {
                        
                    });
                browser.pause(3000);
                browser.assert.urlContains('location')
                browser.back()
                .waitForElementVisible('.header-toggle', 5000)
                browser.moveToElement('css selector','.header-toggle', 10, 10)
                browser.click('.header-toggle')
        }     
    }
    });
    }
}