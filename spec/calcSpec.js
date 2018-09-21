describe("Calculator", function() {
    describe("Additional function", function() {
        it("should take 2 arguments and return the sum of the arguments", function() {
            expect(addition(2, 2)).toBe(4);
        });
        
        it("should not return 4 if given arguments do not produce a sum of 4", function(){
           expect(addition(7, 19)).toBe(26); 
        });
    });
});
