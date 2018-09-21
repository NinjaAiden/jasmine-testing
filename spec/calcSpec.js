describe("whatCanIDrink", function() {
    
     beforeEach(function(){
        ageCheck = new whatCanIDrink();
    });
    
    describe("Addition function", function() {
        it("should check age of -10 and return undefined string", function() {
            expect(whatCanIDrink(-10)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should check age of 13 and return child string", function() {
            expect(whatCanIDrink(13)).toBe("Drink Toddy");
        });
        
        it("should check age of 17 and return teenager string", function() {
            expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
        
        it("should check age of 20 and return young adult string", function() {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        
        it("should check age of 35 and return adult string", function() {
            expect(whatCanIDrink(35)).toBe("Drink Whiskey");
        });
        
        it("should check age of 135 and return undefined string", function() {
            expect(whatCanIDrink(135)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should check age as not a number and return undefined string", function() {
            expect(whatCanIDrink("Hello")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});
