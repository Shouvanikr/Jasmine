//Test Suite
describe('Calculator.js', function(){
    it('Should add number to the total', function(){
        //expect(5+5).toBe(10);
        const calc = new calculator();
        calc.add(5)
        expect(calc.total).toBe(5); // This is a matcher function
    });
    xit('Disabled spec : Should add number to the total', function(){
        //expect(5+5).toBe(10);
        const calc = new calculator();
        calc.add(5)
        expect(calc.total).toBe(5);
    });
    it('Should substract number from the total', function(){
        //expect(5-5).toBe(0)
        const calc = new calculator();
        calc.total=30;
        calc.substract(5)
        expect(calc.total).toBe(25);
    });
    it('Should multiply number from the total', function(){
        const calc = new calculator();
        calc.total=30;
        calc.multiply(5)
        expect(calc.total).toBe(150);
    });
    it('Should divide number from the total', function(){
        const calc = new calculator();
        calc.total=30;
        calc.divide(5)
        expect(calc.total).toBe(6);
    });
});
