class BMI {
    
    constructor(feet, inches, pounds) {
        this.feet = feet;
        this.inches = inches;
        this.pounds = pounds;
    }

    getBMI() {
        return {
            value: this.getBMIValue(),
            category: this.getBMICategory()
        };
    }

    getBMIValue() {
        return;
    }

    getBMICategory() {
        return;
    }

    feetToInches(feet) {
        return;
    }

    inchesToMeters(inches) {
        return;
    }

    poundsToKilograms(pounds) {
        return;
    }
}

exports.BMI = BMI;
