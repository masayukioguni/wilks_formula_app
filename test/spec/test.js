/*global describe it */
'use strict';
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });
    describe("Application", function() {
	  	it("should create a global variable for the namespace", function () {
	    	expect(wilksFormulaApp).to.exist;
	  	});
	});
})();
