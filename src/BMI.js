class BMI {
    
    constructor(feet, inches, pounds) {
        this.feet = 0;
        this.inches = 0;
        this.pounds = 0;
        this.bmi = 0;
        this.category = '';
    }

    getBMI() {
        return {
            bmi: this.bmi,
            category: this.category
        };
    }

    setFeet(feet) {
        return;
    }

    setInches(inches) {
        return;
    }

    setPounds(pounds) {
        return;
    }

    getValue() {
        return;
    }

    getCategory() {
        return;
    }

    setCategory() {
        return;
    }

    feetToInches() {
        return;
    }

    inchesToMeters() {
        return;
    }

    poundsToKilograms() {
        return;
    }
}

exports.BMI = BMI;
