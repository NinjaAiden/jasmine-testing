describe("fizzBuzz", function() {
    
     beforeEach(function(){
        check = new fizzBuzz();
    });
    
    describe("checks if number is divisible by 3, 5 or both", function() {
         it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
        
        it("should check that the number is divisible by 5 and 3", function() {
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });
        
        it("should check number is divisible by 3", function() {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });
        
        
        it("should check number is divisible by 5", function() {
            var result = fizzBuzz(20);
            expect(result).toBe("Buzz");
        });
        
        it("should return number if not divisible by 3 or 5 ", function() {
            var result = fizzBuzz(8);
            expect(result).toBe(8);
        });
    });
});
