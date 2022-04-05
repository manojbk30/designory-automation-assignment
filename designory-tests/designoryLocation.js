const { makeAssertProxy } = require("nightwatch/lib/api");

module.exports={
    '@tags': ['location'],
    'Designory home page test cases'(browser){
    const homePageLoc = 'div.location-list > div > div > div:nth-child(2) > div > span'
    const currentPageLink = '.location.current > div >span';
    browser
        .getElementProperty('.heading-xl', 'innerText', function(result) {
        expect(result.value).to.equal('CHI')
        })

        .url('https://www.designory.com/locations/chicago/')
        .pause(20000)
        browser.ensure.elementTextIs('.heading-xl', "CHI", function(print){}) 
        .getElementProperty('.location.current > div > a', 'title', function(result) {
        expect(result.value).to.equal('Chicago')
        }) 
            
        .getElementProperty('.location.current > div > a', 'title', function(result) {
        expect(result.value).to.equal('Chicago')
        console.log('Value of CURRENT LOCATION  --> ' + result.value + ' Expected Location -> ' + 'https://www.designory.com/locations/chicago')
        })   

        .getElementProperty(".location > img", "src", function(result){
        newDecodeURI = decodeURI(result.value)
        console.log('After ENCODING  URL--> ' + newDecodeURI)
        expect(newDecodeURI).to.equal("https://maps.googleapis.com/maps/api/staticmap?center= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&zoom=16.5&markers= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&size=400x150&key=AIzaSyAkAXQMgbxLGj6ZFqVAAR8JT4-5LaWKfIY")
          })

        browser.ensure.elementTextIs('.grid-xl-6 > div > div:nth-child(2) > div > p', "Phone: +1 312 729 4500", function(print){})
        .getCssProperty(".grid-xl-6 > h2", "font-size", function(result){
        console.log('H2 font --> ' + result.value + ' Expected -> ' + 'font Size')
        this.assert.equal(result.value, "40px");
          })
    }      
}



