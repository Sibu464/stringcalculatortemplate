let Calculator = require ("./calculator");

//Example test
describe("string calculator", function () {
    it("should return 6 ", function () {
        let calculator = new Calculator();
        let calculatorResult = calculator.add("1,2,3");
        expect(calculatorResult).toBe(6);
    });
    it("should return 0 if string is empty", function () {
        let calculator = new Calculator();
        let calculatorResult = calculator.add("");
        expect(calculatorResult).toBe(0);
    });
    it("should return 2", function () {
        let calculator = new Calculator();
        let calculatorResult = calculator.add("2,2456");
        expect(calculatorResult).toBe(2);
    });
});