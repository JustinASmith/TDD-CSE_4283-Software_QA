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

eval("class BMI {\r\n\r\n    constructor() {\r\n        this.feet = NaN;\r\n        this.inches = NaN;\r\n        this.pounds = NaN;\r\n        this.bmi = NaN;\r\n        this.category;\r\n    }\r\n\r\n    getBMI() {\r\n        this.bmi = this.getValue();\r\n        this.category = this.getCategory();\r\n        return {\r\n            bmi: this.bmi,\r\n            category: this.category\r\n        };\r\n    }\r\n\r\n    setFeet(feet) {\r\n        if (typeof feet != 'number') feet = this.round(feet, 0);\r\n        if (feet >= 0 && feet <= 11) this.feet = feet;\r\n        else this.feet = NaN;\r\n    }\r\n\r\n    getFeet() {\r\n        return this.feet;\r\n    }\r\n\r\n    setInches(inches) {\r\n        if (typeof inches != 'number') inches = this.round(inches, 0);\r\n        if (inches >= 0 && inches <= 132) this.inches = inches;\r\n        else this.inches = NaN;\r\n    }\r\n\r\n    getInches() {\r\n        return this.inches;\r\n    }\r\n\r\n    setPounds(pounds) {\r\n        if (typeof pounds != 'number') pounds = this.round(pounds, 0);\r\n        if (pounds > 0 && pounds <= 1000) this.pounds = pounds;\r\n        else this.pounds = NaN;\r\n    }\r\n\r\n    getPounds() {\r\n        return this.pounds;\r\n    }\r\n\r\n    getValue() {\r\n        if (isNaN(this.feet) || isNaN(this.inches) || isNaN(this.pounds) || (this.feet == 0 && this.inches == 0)) {\r\n            return undefined;\r\n        }\r\n        // 1. convert lbs to kg\r\n        const kg = this.poundsToKilograms(this.pounds);\r\n        // 2. convert feet to inches and add inches\r\n        const newInches = this.feetToInches(this.feet) + this.inches;\r\n        if (!(newInches > 0 && newInches <= 132)) {\r\n            return undefined;\r\n        }\r\n        // 3. convert inches to meters\r\n        const meters = this.inchesToMeters(newInches);\r\n        // 4. divide kg by squared meters\r\n        return this.round((kg / (meters * meters)), 1);\r\n    }\r\n\r\n    getCategory() {\r\n        if (isNaN(this.feet) || isNaN(this.inches) || isNaN(this.pounds) || isNaN(this.bmi)) {\r\n            return undefined;\r\n        }\r\n        if (this.bmi >= 30.0) {\r\n            return 'Obese';\r\n        } else if (this.bmi >= 25.0) {\r\n            return 'Overweight';\r\n        } else if (this.bmi >= 18.5) {\r\n            return 'Normal';\r\n        } else {\r\n            return 'Underweight';\r\n        }\r\n    }\r\n\r\n    feetToInches(feet) {\r\n        return this.round((feet * 12.0), 0);\r\n    }\r\n\r\n    inchesToMeters(inches) {\r\n        return this.round((inches * 0.025), 3);\r\n    }\r\n\r\n    poundsToKilograms(pounds) {\r\n        return this.round((pounds * 0.45), 2);\r\n    }\r\n\r\n    round(value, precision) {\r\n        const multiplier = Math.pow(10, precision || 0);\r\n        return Math.round(value * multiplier) / multiplier;\r\n    }\r\n}\r\n\r\nexports.BMI = BMI;\n\n//# sourceURL=webpack://tdd-cse_4283-software_qa/./src/BMI.js?");

/***/ }),

/***/ "./src/Retirement.js":
/*!***************************!*\
  !*** ./src/Retirement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("class Retirement {\r\n\r\n    constructor() {\r\n        this.age = undefined;\r\n        this.salary = 0;\r\n        this.percentSaved = 0;\r\n        this.savingGoal = 0;\r\n        this.employerMatch = 1.35; // 35% match\r\n    }\r\n\r\n    isGoalMet() {\r\n        return this.getAgeGoalMet() < 100 ? true : false;\r\n    }\r\n\r\n    getAgeGoalMet() {\r\n        return this.getYearsTilGoal() != undefined ? this.age + this.getYearsTilGoal() : undefined;\r\n    }\r\n\r\n    getSavingPerYear() {\r\n        if (isNaN(this.savingGoal) || isNaN(this.salary) || isNaN(this.percentSaved)) {\r\n            return undefined;\r\n        }\r\n        return (this.salary * this.percentSaved) * this.employerMatch;\r\n    }\r\n\r\n    getYearsTilGoal() {\r\n        return this.getSavingPerYear() > 0 ? Math.ceil((this.savingGoal / this.getSavingPerYear())) : undefined;\r\n    }\r\n\r\n    setAge(age) {\r\n        if (typeof age != 'number') age = this.round(age, 0);\r\n        if (age > 0 && age <= 100) this.age = age;\r\n        else this.age = undefined;\r\n    }\r\n\r\n    getAge() {\r\n        return this.age;\r\n    }\r\n\r\n    setSalary(salary) {\r\n        if (typeof salary != 'number') salary = this.round(salary, 0);\r\n        if (salary >= 0 && salary <= 500000) this.salary = salary;\r\n        else this.salary = undefined;\r\n    }\r\n\r\n    getSalary() {\r\n        return this.salary;\r\n    }\r\n\r\n    setPercentSaved(percentSaved) {\r\n        if (typeof percentSaved != 'number') percentSaved = this.round(percentSaved, 2);\r\n        if (percentSaved >= 0 && percentSaved <= 1.0) this.percentSaved = percentSaved;\r\n        else this.percentSaved = undefined;\r\n    }\r\n\r\n    getPercentSaved() {\r\n        return this.percentSaved;\r\n    }\r\n\r\n    setSavingGoal(savingGoal) {\r\n        if (typeof savingGoal != 'number') savingGoal = this.round(savingGoal, 0);\r\n        if (savingGoal >= 0) this.savingGoal = savingGoal;\r\n        else this.savingGoal = undefined;\r\n    }\r\n\r\n    getSavingGoal() {\r\n        return this.savingGoal;\r\n    }\r\n\r\n    round(value, precision) {\r\n        const multiplier = Math.pow(10, precision || 0);\r\n        return Math.round(value * multiplier) / multiplier;\r\n    }\r\n}\r\n\r\nexports.Retirement = Retirement;\r\n\n\n//# sourceURL=webpack://tdd-cse_4283-software_qa/./src/Retirement.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { BMI } = __webpack_require__(/*! ./BMI */ \"./src/BMI.js\");\r\nconst { Retirement } = __webpack_require__(/*! ./Retirement */ \"./src/Retirement.js\");\r\n\r\nconst bmi = new BMI();\r\nconst retirement = new Retirement();\r\n\r\ntry {\r\n  function handleFeet() {\r\n    const feet = document.getElementById('feet');\r\n    bmi.setFeet(feet.value);\r\n  }\r\n\r\n  function handleInches() {\r\n    const inches = document.getElementById('inches');\r\n    bmi.setInches(inches.value);\r\n  }\r\n\r\n  function handlePounds() {\r\n    const pounds = document.getElementById('pounds');\r\n    bmi.setPounds(pounds.value);\r\n  }\r\n\r\n  function handleAge() {\r\n    const age = document.getElementById('age');\r\n    retirement.setAge(age.value);\r\n  }\r\n\r\n  function handleSalary() {\r\n    const salary = document.getElementById('salary');\r\n    const sal = salary.value.replace(/,/g, \"\");\r\n    retirement.setSalary(sal);\r\n  }\r\n\r\n  function handlePercentSaved() {\r\n    const percentSaved = document.getElementById('percentSaved');\r\n    let percent = percentSaved.value;\r\n    if (percentSaved.value.slice(-1) == '%') {\r\n      percent = parseFloat(percentSaved.value) / 100.0;\r\n    }\r\n    retirement.setPercentSaved(percent);\r\n  }\r\n\r\n  function handleSavingGoal() {\r\n    const goal = document.getElementById('goal');\r\n    const saving = goal.value.replace(/,/g, \"\");\r\n    retirement.setSavingGoal(saving);\r\n  }\r\n\r\n  async function handleBmiSubmit() {\r\n    const result = bmi.getBMI();\r\n    let bmiError = document.getElementById('bmi-error');\r\n    let bmiResult = document.getElementById('bmi-result');\r\n    let bmiCategory = document.getElementById('bmi-category');\r\n    bmiError.classList.add(\"hidden\");\r\n    if (result.bmi && result.category) {\r\n      bmiResult.innerText = result.bmi;\r\n      bmiCategory.innerText = result.category;\r\n      openModal('bmi');\r\n    } else {\r\n      bmiError.classList.remove(\"hidden\");\r\n    }\r\n  }\r\n\r\n  async function handleRetirementSubmit() {\r\n    let yearsTilGoal = retirement.getYearsTilGoal();\r\n    let savingsPerYear = retirement.getSavingPerYear();\r\n    let isGoalMet = retirement.isGoalMet();\r\n    let ageGoalMet = retirement.getAgeGoalMet();\r\n\r\n    let retirementError = document.getElementById('retirement-error');\r\n    let retirementYearsTilGoal = document.getElementById('retirement-years-til');\r\n    let retirementSavingsPerYear = document.getElementById('retirement-savings-per-year');\r\n    let retirementGoalMet = document.getElementById('retirement-goal-met');\r\n    let retirementAgeGoalMet = document.getElementById('retirement-age-goal-met');\r\n\r\n    retirementError.classList.add(\"hidden\");\r\n    if (savingsPerYear != undefined) {\r\n      if (yearsTilGoal != undefined) {\r\n        retirementYearsTilGoal.innerText = 'Years To Meet Goal: ' + yearsTilGoal;\r\n      } else {\r\n        retirementYearsTilGoal.innerText = '';\r\n      }\r\n      retirementSavingsPerYear.innerText = 'Savings Per Year: $' + savingsPerYear;\r\n      if (ageGoalMet != undefined) {\r\n        retirementAgeGoalMet.innerText = 'Age Goal is Met: ' + ageGoalMet;\r\n      } else {\r\n        retirementAgeGoalMet.innerText = 'Age Goal is Met: Never';\r\n      }\r\n      if (isGoalMet) {\r\n        retirementGoalMet.classList.remove(\"text-red-600\");\r\n        retirementGoalMet.classList.add(\"text-green-600\");\r\n        retirementGoalMet.innerText = 'You will be alive!';\r\n      } else {\r\n        retirementGoalMet.classList.remove(\"text-green-600\");\r\n        retirementGoalMet.classList.add(\"text-red-600\");\r\n        retirementGoalMet.innerText = 'You died..';\r\n      }\r\n      openModal('retirement');\r\n    } else {\r\n      retirementError.classList.remove(\"hidden\");\r\n    }\r\n  }\r\n\r\n  async function menuOption(elem) {\r\n    let bmiForm = document.getElementById('bmi-form');\r\n    let retirementForm = document.getElementById('retirement-form');\r\n    if (elem.id == 'bmi-menu') {\r\n      retirementForm.classList.remove('opacity-1');\r\n      retirementForm.classList.add('opacity-0');\r\n      await sleep(500);\r\n      retirementForm.classList.add('hidden');\r\n      bmiForm.classList.remove('hidden');\r\n      bmiForm.classList.remove('opacity-0');\r\n      bmiForm.classList.add('opacity-1');\r\n    } else {\r\n      bmiForm.classList.remove('opacity-1');\r\n      bmiForm.classList.add('opacity-0');\r\n      await sleep(500);\r\n      bmiForm.classList.add('hidden');\r\n      retirementForm.classList.remove('hidden');\r\n      retirementForm.classList.remove('opacity-0');\r\n      retirementForm.classList.add('opacity-1');\r\n    }\r\n  }\r\n\r\n  async function openModal(val) {\r\n    let modal = document.getElementById(val + '-modal');\r\n    modal.classList.remove(\"hidden\");\r\n    await sleep(50);\r\n    modal.classList.remove(\"opacity-0\");\r\n    modal.classList.add(\"opacity-1\");\r\n  }\r\n\r\n  async function closeModal(val) {\r\n    let modal = document.getElementById(val + '-modal');\r\n    modal.classList.remove(\"opacity-1\");\r\n    modal.classList.add(\"opacity-0\");\r\n    await sleep(500);\r\n    modal.classList.add(\"hidden\");\r\n  }\r\n\r\n  function sleep(ms) {\r\n    return new Promise(resolve => setTimeout(resolve, ms));\r\n  }\r\n\r\n  window.handleFeet = handleFeet;\r\n  window.handleInches = handleInches;\r\n  window.handlePounds = handlePounds;\r\n  window.handleBmiSubmit = handleBmiSubmit;\r\n  window.handleAge = handleAge;\r\n  window.handleSalary = handleSalary;\r\n  window.handlePercentSaved = handlePercentSaved;\r\n  window.handleSavingGoal = handleSavingGoal;\r\n  window.handleRetirementSubmit = handleRetirementSubmit;\r\n  window.menuOption = menuOption;\r\n  window.closeModal = closeModal;\r\n  window.openModal = openModal;\r\n} catch(err) {}\n\n//# sourceURL=webpack://tdd-cse_4283-software_qa/./src/app.js?");

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