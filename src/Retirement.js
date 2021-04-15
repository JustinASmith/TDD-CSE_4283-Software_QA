class Retirement {
  constructor () {
    this.age = undefined
    this.salary = 0
    this.percentSaved = 0
    this.savingGoal = 0
    this.employerMatch = 1.35 // 35% match
  }

  isGoalMet () {
    return this.getAgeGoalMet() < 100
  }

  getAgeGoalMet () {
    return this.getYearsTilGoal() !== undefined ? this.age + this.getYearsTilGoal() : undefined
  }

  getSavingPerYear () {
    if (isNaN(this.savingGoal) || isNaN(this.salary) || isNaN(this.percentSaved)) {
      return undefined
    }
    return (this.salary * this.percentSaved) * this.employerMatch
  }

  getYearsTilGoal () {
    return this.getSavingPerYear() > 0 ? Math.ceil((this.savingGoal / this.getSavingPerYear())) : undefined
  }

  setAge (age) {
    if (typeof age !== 'number') age = this.round(age, 0)
    if (age > 0 && age <= 100) this.age = age
    else this.age = undefined
  }

  getAge () {
    return this.age
  }

  setSalary (salary) {
    if (typeof salary !== 'number') salary = this.round(salary, 0)
    if (salary >= 0 && salary <= 500000) this.salary = salary
    else this.salary = undefined
  }

  getSalary () {
    return this.salary
  }

  setPercentSaved (percentSaved) {
    if (typeof percentSaved !== 'number') percentSaved = this.round(percentSaved, 2)
    if (percentSaved >= 0 && percentSaved <= 1.0) this.percentSaved = percentSaved
    else this.percentSaved = undefined
  }

  getPercentSaved () {
    return this.percentSaved
  }

  setSavingGoal (savingGoal) {
    if (typeof savingGoal !== 'number') savingGoal = this.round(savingGoal, 0)
    if (savingGoal >= 0) this.savingGoal = savingGoal
    else this.savingGoal = undefined
  }

  getSavingGoal () {
    return this.savingGoal
  }

  round (value, precision) {
    const multiplier = Math.pow(10, precision || 0)
    return Math.round(value * multiplier) / multiplier
  }
}

exports.Retirement = Retirement
