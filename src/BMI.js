class BMI {
  constructor () {
    this.feet = NaN
    this.inches = NaN
    this.pounds = NaN
    this.bmi = NaN
    this.category = ""
  }

  getBMI () {
    this.bmi = this.getValue()
    this.category = this.getCategory()
    return {
      bmi: this.bmi,
      category: this.category
    }
  }

  setFeet (feet) {
    if (typeof feet !== 'number') feet = this.round(feet, 0)
    if (feet >= 0 && feet <= 11) this.feet = feet
    else this.feet = NaN
  }

  setInches (inches) {
    if (typeof inches !== 'number') inches = this.round(inches, 0)
    if (inches >= 0 && inches <= 132) this.inches = inches
    else this.inches = NaN
  }

  setPounds (pounds) {
    if (typeof pounds !== 'number') pounds = this.round(pounds, 0)
    if (pounds > 0 && pounds <= 1000) this.pounds = pounds
    else this.pounds = NaN
  }

  getValue () {
    if (isNaN(this.feet) || isNaN(this.inches) || isNaN(this.pounds) || (this.feet === 0 && this.inches === 0)) {
      return undefined
    }
    // 1. convert lbs to kg
    const kg = this.poundsToKilograms(this.pounds)
    // 2. convert feet to inches and add inches
    const newInches = this.feetToInches(this.feet) + this.inches
    if (!(newInches > 0 && newInches <= 132)) {
      return undefined
    }
    // 3. convert inches to meters
    const meters = this.inchesToMeters(newInches)
    // 4. divide kg by squared meters
    return this.round((kg / (meters * meters)), 1)
  }

  getCategory () {
    if (isNaN(this.feet) || isNaN(this.inches) || isNaN(this.pounds) || isNaN(this.bmi)) {
      return undefined
    }
    if (this.bmi > 30.0) {
      return 'Obese'
    } else if (this.bmi > 25.0) {
      return 'Overweight'
    } else if (this.bmi > 18.5) {
      return 'Normal'
    } else {
      return 'Underweight'
    }
  }

  feetToInches (feet) {
    return this.round((feet * 12.0), 0)
  }

  inchesToMeters (inches) {
    return this.round((inches * 0.025), 3)
  }

  poundsToKilograms (pounds) {
    return this.round((pounds * 0.45), 2)
  }

  round (value, precision) {
    const multiplier = Math.pow(10, precision || 0)
    return Math.round(value * multiplier) / multiplier
  }
}

exports.BMI = BMI
