describe("Calculator", function() {
    
    beforeEach(function(){
        calc = new Calculator();
    });
    

    describe("add method", function() {
        it("should take 2 arguments and return the sum of the arguments", function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });

        it("should not return 4 if given arguments do not produce a sum of 4", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });

        it("should call the alert if either argument is undefined", function() {
            spyOn(window, "alert");
            calc.add("Hello");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});
