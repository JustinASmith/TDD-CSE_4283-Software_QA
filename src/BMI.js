class BMI {
    
    constructor(feet, inches, pounds) {
        this.feet = 0;
        this.inches = 0;
        this.pounds = 0;
    }

    getBMI() {
        return {
            bmi: this.getBMIValue(),
            category: this.getBMICategory()
        };
    }

    setFeet(feet) {
        return;
    }

    getFeet() {
        return;
    }

    setInches(inches) {
        return;
    }

    getInches() {
        return;
    }

    setPounds(pounds) {
        return;
    }

    getPounds() {
        return;
    }

    getBMIValue() {
        return;
    }

    getBMICategory() {
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
