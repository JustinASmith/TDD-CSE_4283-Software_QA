const { BMI } = require("./BMI");

describe('Body Mass Index (BMI) class', () => {
    let bmi;
    
    beforeEach(() => {
        bmi = new BMI();
    });

    // Spec: [0, 10]
    describe('Feet to Inches', () => {
        test('2 feet is 24 inches', () => {
            bmi.setFeet(2);
            expect(bmi.feetToInches()).toBe(24);
        });
    
        test('0 feet to be 0 inches', () => {
            bmi.setFeet(0);
            expect(bmi.feetToInches()).toBe(0);
        });

        test('-1 feet to be 0 inches', () => {
            bmi.setFeet(-1);
            expect(bmi.feetToInches()).toBe(0);
        });
    });

    // Spec: (0, 132]
    describe('Inches to Meters', () => {
        test('132 inches is 3.3 meters', () => {
            bmi.setInches(132);
            expect(bmi.inchesToMeters()).toBe(3.3);
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

    /*
        Input: feet, inches, pounds
        Spec:
            feet -> [0, 10]
            inches -> (0, 12]
            pounds -> (0, 1000]
            feet and inches combine to be (0, 132]
    */
    describe('Get BMI Value and Category', () => {
        test('a 0 foot, 0 inch, 0 pound person has an undefined bmi and category', () => {
            bmi.setFeet(0);
            bmi.setInches(0);
            bmi.setPounds(0);
            const result = bmi.getBMI();
            expect(result.bmi).toBe(undefined);
            expect(result.category).toBe(undefined);
        });

        test('a 0 foot, 0 inch, 1001 pound person has an undefined bmi and category', () => {
            bmi.setFeet(0);
            bmi.setInches(0);
            bmi.setPounds(1001);
            const result = bmi.getBMI();
            expect(result.bmi).toBe(undefined);
            expect(result.category).toBe(undefined);
        });

        test('a 11 foot, 1 inch, 1001 pound person has an undefined bmi and category', () => {
            bmi.setFeet(11);
            bmi.setInches(1);
            bmi.setPounds(1001);
            const result = bmi.getBMI();
            expect(result.bmi).toBe(undefined);
            expect(result.category).toBe(undefined);
        });

        test('a 11 foot, 1 inch, 0 pound person has an undefined bmi and category', () => {
            bmi.setFeet(11);
            bmi.setInches(1);
            bmi.setPounds(0);
            const result = bmi.getBMI();
            expect(result.bmi).toBe(undefined);
            expect(result.category).toBe(undefined);
        });

        test('a 5 foot, 3 inch, 104 pound person has a bmi of 18.4 which is underweight', () => {
            bmi.setFeet(5);
            bmi.setInches(3);
            bmi.setPounds(104);
            const result = bmi.getBMI();
            expect(result.bmi).toBe(18.4);
            expect(result.category).toBe('Underweight');
        });

        test('a 6 foot, 3 inch, 190 pound person has a bmi of 23.7 which is normal', () => {
            bmi.setFeet(6);
            bmi.setInches(3);
            bmi.setPounds(190);
            const result = bmi.getBMI();
            expect(result.bmi).toBe(23.7);
            expect(result.category).toBe('Normal');
        });

        test('a 5 foot, 8 inch, 165 pound person has a bmi of 25.1 which is overweight', () => {
            bmi.setFeet(5);
            bmi.setInches(8);
            bmi.setPounds(165);
            const result = bmi.getBMI();
            expect(result.bmi).toBe(25.1);
            expect(result.category).toBe('Overweight');
        });

        test('a 5 foot, 0 inch, 180 pound person has a bmi of 35.1 which is obese', () => {
            bmi.setFeet(5);
            bmi.setInches(0);
            bmi.setPounds(180);
            const result = bmi.getBMI();
            expect(result.bmi).toBe(35.1);
            expect(result.category).toBe('Obese');
        });
    });
});
