//takes expect module from chai
import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test', function(){
    it('should pass', function(){
        expect(true).to.equal(true);
    })
})

describe ('index.html', function() {
    it('should say hello', function (done) {
        //gets index html page
        const index = fs.readFileSync("./src/index.html", "utf-8");
        //window = window in the broswer
        jsdom.env(index, function (err, window) {
            //searches through html tags, the tag we're interested in is the first tag in the array named h1
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello World!")
            //saves memory by closing the DOM window
            done();
            window.close();
        });
    });
});
