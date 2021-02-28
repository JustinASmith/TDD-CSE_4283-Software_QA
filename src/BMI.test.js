const { BMI } = require("./BMI");

describe('Body Mass Index (BMI) class', () => {
    let bmi;
    
    beforeEach(() => {
        bmi = new BMI();
    });

    // Spec: (0, 10]
    describe('Feet to Inches', () => {
        test('2 feet is 24 inches', () => {
            bmi.setFeet(2);
            expect(bmi.feetToInches()).toBe(24);
        });
    
        test('0 feet to be 0 inches', () => {
            bmi.setFeet(0);
            expect(bmi.feetToInches()).toBe(0);
        });
    });

    // Spec: (0, 120]
    describe('Inches to Meters', () => {
        test('120 inches is 3 meters', () => {
            bmi.setInches(120);
            expect(bmi.inchesToMeters()).toBe(3);
        });

        test('0 inches is 0 meters', () => {
            bmi.setInches(0);
            expect(bmi.inchesToMeters()).toBe(0);
        });
    });

    // Spec: (0, 1000]
   describe('Pounds to Kilograms', () => {
        test('1000 pounds is 450 kilograms', () => {
            bmi.setPounds(1000);
            expect(bmi.poundsToKilograms()).toBe(450);
        });

        test('0 pounds is 0 kilograms', () => {
            bmi.setPounds(0);
            expect(bmi.poundsToKilograms()).toBe(0);
        });
    });
});
