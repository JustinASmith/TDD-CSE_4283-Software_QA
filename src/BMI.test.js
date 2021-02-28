const { BMI } = require("./BMI");

describe('Body Mass Index (BMI) class', () => {
    let bmi;
    
    beforeEach(() => {
        bmi = new BMI();
    });

    /*
        Input: feet
        Spec: (0, 10]
    */
    describe('Feet to Inches', () => {
        test('2 feet is 24 inches', () => {
            expect(bmi.feetToInches(2)).toBe(24);
        });
    
        test('0 feet to be 0 inches', () => {
            expect(bmi.feetToInches(0)).toBe(0);
        });
    });

    /*
        Input: inches
        Spec: (0, 120]
    */
    describe('Inches to Meters', () => {
        test('120 inches is 3 meters', () => {
            expect(bmi.inchesToMeters(120)).toBe(3);
        });

        test('0 inches is 0 meters', () => {
            expect(bmi.inchesToMeters(0)).toBe(0);
        });
    });

    /*
        Input: pounds
        Spec: (0, 1000]
    */
   describe('Pounds to Kilograms', () => {
        test('1000 pounds is 450 kilograms', () => {
            expect(bmi.poundsToKilograms(1000)).toBe(450);
        });

        test('0 pounds is 0 kilograms', () => {
            expect(bmi.poundsToKilograms(0)).toBe(0);
        });
    });
});
