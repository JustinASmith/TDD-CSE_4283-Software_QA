/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BMI.js":
/*!********************!*\
  !*** ./src/BMI.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("class BMI {\n  constructor () {\n    this.feet = NaN\n    this.inches = NaN\n    this.pounds = NaN\n    this.bmi = NaN\n    this.category = \"\"\n  }\n\n  getBMI () {\n    this.bmi = this.getValue()\n    this.category = this.getCategory()\n    return {\n      bmi: this.bmi,\n      category: this.category\n    }\n  }\n\n  setFeet (feet) {\n    if (typeof feet !== 'number') feet = this.round(feet, 0)\n    if (feet >= 0 && feet <= 11) this.feet = feet\n    else this.feet = NaN\n  }\n\n  setInches (inches) {\n    if (typeof inches !== 'number') inches = this.round(inches, 0)\n    if (inches >= 0 && inches <= 132) this.inches = inches\n    else this.inches = NaN\n  }\n\n  setPounds (pounds) {\n    if (typeof pounds !== 'number') pounds = this.round(pounds, 0)\n    if (pounds > 0 && pounds <= 1000) this.pounds = pounds\n    else this.pounds = NaN\n  }\n\n  getValue () {\n    if (isNaN(this.feet) || isNaN(this.inches) || isNaN(this.pounds) || (this.feet === 0 && this.inches === 0)) {\n      return undefined\n    }\n    // 1. convert lbs to kg\n    const kg = this.poundsToKilograms(this.pounds)\n    // 2. convert feet to inches and add inches\n    const newInches = this.feetToInches(this.feet) + this.inches\n    if (!(newInches > 0 && newInches <= 132)) {\n      return undefined\n    }\n    // 3. convert inches to meters\n    const meters = this.inchesToMeters(newInches)\n    // 4. divide kg by squared meters\n    return this.round((kg / (meters * meters)), 1)\n  }\n\n  getCategory () {\n    if (isNaN(this.feet) || isNaN(this.inches) || isNaN(this.pounds) || isNaN(this.bmi)) {\n      return undefined\n    }\n    if (this.bmi > 30.0) {\n      return 'Obese'\n    } else if (this.bmi > 25.0) {\n      return 'Overweight'\n    } else if (this.bmi > 18.5) {\n      return 'Normal'\n    } else {\n      return 'Underweight'\n    }\n  }\n\n  feetToInches (feet) {\n    return this.round((feet * 12.0), 0)\n  }\n\n  inchesToMeters (inches) {\n    return this.round((inches * 0.025), 3)\n  }\n\n  poundsToKilograms (pounds) {\n    return this.round((pounds * 0.45), 2)\n  }\n\n  round (value, precision) {\n    const multiplier = Math.pow(10, precision || 0)\n    return Math.round(value * multiplier) / multiplier\n  }\n}\n\nexports.BMI = BMI\n\n\n//# sourceURL=webpack://tdd-cse_4283-software_qa/./src/BMI.js?");

/***/ }),

/***/ "./src/Retirement.js":
/*!***************************!*\
  !*** ./src/Retirement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("class Retirement {\n  constructor () {\n    this.age = undefined\n    this.salary = 0\n    this.percentSaved = 0\n    this.savingGoal = 0\n    this.employerMatch = 1.35 // 35% match\n  }\n\n  isGoalMet () {\n    return this.getAgeGoalMet() < 100\n  }\n\n  getAgeGoalMet () {\n    return this.getYearsTilGoal() !== undefined ? this.age + this.getYearsTilGoal() : undefined\n  }\n\n  getSavingPerYear () {\n    if (isNaN(this.savingGoal) || isNaN(this.salary) || isNaN(this.percentSaved)) {\n      return undefined\n    }\n    return (this.salary * this.percentSaved) * this.employerMatch\n  }\n\n  getYearsTilGoal () {\n    return this.getSavingPerYear() > 0 ? Math.ceil((this.savingGoal / this.getSavingPerYear())) : undefined\n  }\n\n  setAge (age) {\n    if (typeof age !== 'number') age = this.round(age, 0)\n    if (age > 0 && age <= 100) this.age = age\n    else this.age = undefined\n  }\n\n  getAge () {\n    return this.age\n  }\n\n  setSalary (salary) {\n    if (typeof salary !== 'number') salary = this.round(salary, 0)\n    if (salary >= 0 && salary <= 500000) this.salary = salary\n    else this.salary = undefined\n  }\n\n  getSalary () {\n    return this.salary\n  }\n\n  setPercentSaved (percentSaved) {\n    if (typeof percentSaved !== 'number') percentSaved = this.round(percentSaved, 2)\n    if (percentSaved >= 0 && percentSaved <= 1.0) this.percentSaved = percentSaved\n    else this.percentSaved = undefined\n  }\n\n  getPercentSaved () {\n    return this.percentSaved\n  }\n\n  setSavingGoal (savingGoal) {\n    if (typeof savingGoal !== 'number') savingGoal = this.round(savingGoal, 0)\n    if (savingGoal >= 0) this.savingGoal = savingGoal\n    else this.savingGoal = undefined\n  }\n\n  getSavingGoal () {\n    return this.savingGoal\n  }\n\n  round (value, precision) {\n    const multiplier = Math.pow(10, precision || 0)\n    return Math.round(value * multiplier) / multiplier\n  }\n}\n\nexports.Retirement = Retirement\n\n\n//# sourceURL=webpack://tdd-cse_4283-software_qa/./src/Retirement.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { BMI } = __webpack_require__(/*! ./BMI */ \"./src/BMI.js\")\nconst { Retirement } = __webpack_require__(/*! ./Retirement */ \"./src/Retirement.js\")\n\nconst bmi = new BMI()\nconst retirement = new Retirement()\n\ntry {\n  function handleFeet () {\n    const feet = document.getElementById('feet')\n    bmi.setFeet(feet.value)\n  }\n\n  function handleInches () {\n    const inches = document.getElementById('inches')\n    bmi.setInches(inches.value)\n  }\n\n  function handlePounds () {\n    const pounds = document.getElementById('pounds')\n    bmi.setPounds(pounds.value)\n  }\n\n  function handleAge () {\n    const age = document.getElementById('age')\n    retirement.setAge(age.value)\n  }\n\n  function handleSalary () {\n    const salary = document.getElementById('salary')\n    const sal = salary.value.replace(/,/g, '')\n    retirement.setSalary(sal)\n  }\n\n  function handlePercentSaved () {\n    const percentSaved = document.getElementById('percentSaved')\n    let percent = percentSaved.value\n    if (percentSaved.value.slice(-1) === '%') {\n      percent = parseFloat(percentSaved.value) / 100.0\n    }\n    retirement.setPercentSaved(percent)\n  }\n\n  function handleSavingGoal () {\n    const goal = document.getElementById('goal')\n    const saving = goal.value.replace(/,/g, '')\n    retirement.setSavingGoal(saving)\n  }\n\n  async function handleBmiSubmit () {\n    const result = bmi.getBMI()\n    const bmiError = document.getElementById('bmi-error')\n    const bmiResult = document.getElementById('bmi-result')\n    const bmiCategory = document.getElementById('bmi-category')\n    bmiError.classList.add('hidden')\n    if (result.bmi && result.category) {\n      bmiResult.innerText = result.bmi\n      bmiCategory.innerText = result.category\n      openModal('bmi')\n    } else {\n      bmiError.classList.remove('hidden')\n    }\n  }\n\n  async function handleRetirementSubmit () {\n    const yearsTilGoal = retirement.getYearsTilGoal()\n    const savingsPerYear = retirement.getSavingPerYear()\n    const isGoalMet = retirement.isGoalMet()\n    const ageGoalMet = retirement.getAgeGoalMet()\n\n    const retirementError = document.getElementById('retirement-error')\n    const retirementYearsTilGoal = document.getElementById('retirement-years-til')\n    const retirementSavingsPerYear = document.getElementById('retirement-savings-per-year')\n    const retirementGoalMet = document.getElementById('retirement-goal-met')\n    const retirementAgeGoalMet = document.getElementById('retirement-age-goal-met')\n\n    retirementError.classList.add('hidden')\n    if (savingsPerYear !== undefined) {\n      if (yearsTilGoal !== undefined) {\n        retirementYearsTilGoal.innerText = 'Years To Meet Goal: ' + yearsTilGoal\n      } else {\n        retirementYearsTilGoal.innerText = ''\n      }\n      retirementSavingsPerYear.innerText = 'Savings Per Year: $' + savingsPerYear\n      if (ageGoalMet !== undefined) {\n        retirementAgeGoalMet.innerText = 'Age Goal is Met: ' + ageGoalMet\n      } else {\n        retirementAgeGoalMet.innerText = 'Age Goal is Met: Never'\n      }\n      if (isGoalMet) {\n        retirementGoalMet.classList.remove('text-red-600')\n        retirementGoalMet.classList.add('text-green-600')\n        retirementGoalMet.innerText = 'You will be alive!'\n      } else {\n        retirementGoalMet.classList.remove('text-green-600')\n        retirementGoalMet.classList.add('text-red-600')\n        retirementGoalMet.innerText = 'You died..'\n      }\n      openModal('retirement')\n    } else {\n      retirementError.classList.remove('hidden')\n    }\n  }\n\n  async function menuOption (elem) {\n    const bmiForm = document.getElementById('bmi-form')\n    const retirementForm = document.getElementById('retirement-form')\n    if (elem.id === 'bmi-menu') {\n      retirementForm.classList.remove('opacity-1')\n      retirementForm.classList.add('opacity-0')\n      await sleep(500)\n      retirementForm.classList.add('hidden')\n      bmiForm.classList.remove('hidden')\n      bmiForm.classList.remove('opacity-0')\n      bmiForm.classList.add('opacity-1')\n    } else {\n      bmiForm.classList.remove('opacity-1')\n      bmiForm.classList.add('opacity-0')\n      await sleep(500)\n      bmiForm.classList.add('hidden')\n      retirementForm.classList.remove('hidden')\n      retirementForm.classList.remove('opacity-0')\n      retirementForm.classList.add('opacity-1')\n    }\n  }\n\n  async function openModal (val) {\n    const modal = document.getElementById(val + '-modal')\n    modal.classList.remove('hidden')\n    await sleep(50)\n    modal.classList.remove('opacity-0')\n    modal.classList.add('opacity-1')\n  }\n\n  async function closeModal (val) {\n    const modal = document.getElementById(val + '-modal')\n    modal.classList.remove('opacity-1')\n    modal.classList.add('opacity-0')\n    await sleep(500)\n    modal.classList.add('hidden')\n  }\n\n  function sleep (ms) {\n    return new Promise(resolve => setTimeout(resolve, ms))\n  }\n\n  window.handleFeet = handleFeet\n  window.handleInches = handleInches\n  window.handlePounds = handlePounds\n  window.handleBmiSubmit = handleBmiSubmit\n  window.handleAge = handleAge\n  window.handleSalary = handleSalary\n  window.handlePercentSaved = handlePercentSaved\n  window.handleSavingGoal = handleSavingGoal\n  window.handleRetirementSubmit = handleRetirementSubmit\n  window.menuOption = menuOption\n  window.closeModal = closeModal\n  window.openModal = openModal\n} catch (err) {}\n\n\n//# sourceURL=webpack://tdd-cse_4283-software_qa/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;