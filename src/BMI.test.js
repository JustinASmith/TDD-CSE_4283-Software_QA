const { BMI } = require('./BMI')

describe('Body Mass Index (BMI) class', () => {
  let bmi

  beforeEach(() => {
    bmi = new BMI()
  })

  describe('Feet to Inches', () => {
    test('2 feet is 24 inches', () => {
      expect(bmi.feetToInches(2)).toBe(24)
    })

    test('0 feet to be 0 inches', () => {
      expect(bmi.feetToInches(0)).toBe(0)
    })

    test('-1 feet to be 0 inches', () => {
      expect(bmi.feetToInches(-1)).toBe(-12)
    })
  })

  describe('Inches to Meters', () => {
    test('132 inches is 3.3 meters', () => {
      expect(bmi.inchesToMeters(132)).toBe(3.3)
    })

    test('0 inches is 0 meters', () => {
      expect(bmi.inchesToMeters(0)).toBe(0)
    })
  })

  describe('Pounds to Kilograms', () => {
    test('1000 pounds is 450 kilograms', () => {
      expect(bmi.poundsToKilograms(1000)).toBe(450)
    })

    test('0 pounds is 0 kilograms', () => {
      expect(bmi.poundsToKilograms(0)).toBe(0)
    })
  })

  /*
        Input Variables: feet, inches, pounds or (F, I, P)
        Input Vector: [F, I, P]
        Note: Feet and Inches combine to make total inches
        Spec:
            F (to inches) + I -> (0, 132], ε = 1
            P -> (0, 1000], ε = 1
            the data space graph is 2-D with inches on y-axis
            and pounds on x-axis where inches are (0, 132] and pounds is (0, 1000]
        Approach: Weak 1 x 1 for the inches/pounds 2-D graph, NOT the 3-D graph of [F, I, P]

        Boundary Points (test cases):
        Off points
        - No weight, has height
        - No height, has weight
        - Over max height, has valid weight
        - Over max weight, has valid height
        On points
        - Min weight, valid height
        - Min height, valid weight
        - Max weight, valid height
        - Max height, valid weight
    */
  describe('Get BMI Value and Category', () => {
    // 'OFF' point
    // No weight, has height
    test('a 0 foot, 1 inch, 0 pound person has an undefined bmi and category', () => {
      bmi.setFeet(0)
      bmi.setInches(1)
      bmi.setPounds(0)
      const result = bmi.getBMI()
      expect(result.bmi).toBe(undefined)
      expect(result.category).toBe(undefined)
    })

    // 'OFF' point
    // No height, has weight
    test('a 0 foot, 0 inch, 1 pound person has an undefined bmi and category', () => {
      bmi.setFeet(0)
      bmi.setInches(0)
      bmi.setPounds(1)
      const result = bmi.getBMI()
      expect(result.bmi).toBe(undefined)
      expect(result.category).toBe(undefined)
    })

    // 'OFF' point
    // Over max height, has valid weight
    test('a 11 foot, 1 inch, 1 pound person has an undefined bmi and category', () => {
      bmi.setFeet(11)
      bmi.setInches(1)
      bmi.setPounds(1)
      const result = bmi.getBMI()
      expect(result.bmi).toBe(undefined)
      expect(result.category).toBe(undefined)
    })

    // 'OFF' point
    // Over max weight, has valid height
    test('a 0 foot, 1 inch, 1001 pound person has an undefined bmi and category', () => {
      bmi.setFeet(0)
      bmi.setInches(1)
      bmi.setPounds(1001)
      const result = bmi.getBMI()
      expect(result.bmi).toBe(undefined)
      expect(result.category).toBe(undefined)
    })

    // 'ON' point
    // Min weight, valid height
    test('a 4 foot, 3 inch, 1 pound person has a bmi of 0 which is underweight', () => {
      bmi.setFeet(4)
      bmi.setInches(3)
      bmi.setPounds(1)
      const result = bmi.getBMI()
      expect(result.bmi).toBe(0.3)
      expect(result.category).toBe('Underweight')
    })

    // 'ON' point
    // Min height, valid weight
    test('a 0 foot, 1 inch, 180 pound person has a bmi of 129,600 which is obese', () => {
      bmi.setFeet(0)
      bmi.setInches(1)
      bmi.setPounds(180)
      const result = bmi.getBMI()
      expect(result.bmi).toBe(129600)
      expect(result.category).toBe('Obese')
    })

    // 'ON' point
    // Max weight, valid height
    test('a 6 foot, 2 inch, 1000 pound person has a bmi of 131.5 which is overweight', () => {
      bmi.setFeet(6)
      bmi.setInches(2)
      bmi.setPounds(1000)
      const result = bmi.getBMI()
      expect(result.bmi).toBe(131.5)
      expect(result.category).toBe('Obese')
    })

    // 'ON' point
    // Max height, valid weight
    test('a 11 foot, 0 inch, 650 pound person has a bmi of 26.9 which is obese', () => {
      bmi.setFeet(11)
      bmi.setInches(0)
      bmi.setPounds(650)
      const result = bmi.getBMI()
      expect(result.bmi).toBe(26.9)
      expect(result.category).toBe('Overweight')
    })
  })
})
