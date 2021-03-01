const { BMI } = require("./BMI");
const { Retirement } = require("./Retirement");

const bmi = new BMI();
const retirement = new Retirement();

try {
  function handleFeet() {
    const feet = document.getElementById('feet');
    bmi.setFeet(feet.value);
  }

  function handleInches() {
    const inches = document.getElementById('inches');
    bmi.setInches(inches.value);
  }

  function handlePounds() {
    const pounds = document.getElementById('pounds');
    bmi.setPounds(pounds.value);
  }

  function handleAge() {
    const age = document.getElementById('age');
    retirement.setAge(age.value);
  }

  function handleSalary() {
    const salary = document.getElementById('salary');
    const sal = salary.value.replace(/,/g, "");
    retirement.setSalary(sal);
  }

  function handlePercentSaved() {
    const percentSaved = document.getElementById('percentSaved');
    let percent = percentSaved.value;
    if (percentSaved.value.slice(-1) == '%') {
      percent = parseFloat(percentSaved.value) / 100.0;
    }
    retirement.setPercentSaved(percent);
  }

  function handleSavingGoal() {
    const goal = document.getElementById('goal');
    const saving = goal.value.replace(/,/g, "");
    retirement.setSavingGoal(saving);
  }

  async function handleBmiSubmit() {
    const result = bmi.getBMI();
    let bmiError = document.getElementById('bmi-error');
    let bmiResult = document.getElementById('bmi-result');
    let bmiCategory = document.getElementById('bmi-category');
    bmiError.classList.add("hidden");
    if (result.bmi && result.category) {
      bmiResult.innerText = result.bmi;
      bmiCategory.innerText = result.category;
      openModal('bmi');
    } else {
      bmiError.classList.remove("hidden");
    }
  }

  async function handleRetirementSubmit() {
    let yearsTilGoal = retirement.getYearsTilGoal();
    let savingsPerYear = retirement.getSavingPerYear();
    let isGoalMet = retirement.isGoalMet();
    let ageGoalMet = retirement.getAgeGoalMet();

    let retirementError = document.getElementById('retirement-error');
    let retirementYearsTilGoal = document.getElementById('retirement-years-til');
    let retirementSavingsPerYear = document.getElementById('retirement-savings-per-year');
    let retirementGoalMet = document.getElementById('retirement-goal-met');
    let retirementAgeGoalMet = document.getElementById('retirement-age-goal-met');

    retirementError.classList.add("hidden");
    if (savingsPerYear != undefined) {
      if (yearsTilGoal != undefined) {
        retirementYearsTilGoal.innerText = 'Years To Meet Goal: ' + yearsTilGoal;
      } else {
        retirementYearsTilGoal.innerText = '';
      }
      retirementSavingsPerYear.innerText = 'Savings Per Year: $' + savingsPerYear;
      if (ageGoalMet != undefined) {
        retirementAgeGoalMet.innerText = 'Age Goal is Met: ' + ageGoalMet;
      } else {
        retirementAgeGoalMet.innerText = 'Age Goal is Met: Never';
      }
      if (isGoalMet) {
        retirementGoalMet.classList.remove("text-red-600");
        retirementGoalMet.classList.add("text-green-600");
        retirementGoalMet.innerText = 'You will be alive!';
      } else {
        retirementGoalMet.classList.remove("text-green-600");
        retirementGoalMet.classList.add("text-red-600");
        retirementGoalMet.innerText = 'You died..';
      }
      openModal('retirement');
    } else {
      retirementError.classList.remove("hidden");
    }
  }

  async function menuOption(elem) {
    let bmiForm = document.getElementById('bmi-form');
    let retirementForm = document.getElementById('retirement-form');
    if (elem.id == 'bmi-menu') {
      retirementForm.classList.remove('opacity-1');
      retirementForm.classList.add('opacity-0');
      await sleep(500);
      retirementForm.classList.add('hidden');
      bmiForm.classList.remove('hidden');
      bmiForm.classList.remove('opacity-0');
      bmiForm.classList.add('opacity-1');
    } else {
      bmiForm.classList.remove('opacity-1');
      bmiForm.classList.add('opacity-0');
      await sleep(500);
      bmiForm.classList.add('hidden');
      retirementForm.classList.remove('hidden');
      retirementForm.classList.remove('opacity-0');
      retirementForm.classList.add('opacity-1');
    }
  }

  async function openModal(val) {
    let modal = document.getElementById(val + '-modal');
    modal.classList.remove("hidden");
    await sleep(50);
    modal.classList.remove("opacity-0");
    modal.classList.add("opacity-1");
  }

  async function closeModal(val) {
    let modal = document.getElementById(val + '-modal');
    modal.classList.remove("opacity-1");
    modal.classList.add("opacity-0");
    await sleep(500);
    modal.classList.add("hidden");
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  window.handleFeet = handleFeet;
  window.handleInches = handleInches;
  window.handlePounds = handlePounds;
  window.handleBmiSubmit = handleBmiSubmit;
  window.handleAge = handleAge;
  window.handleSalary = handleSalary;
  window.handlePercentSaved = handlePercentSaved;
  window.handleSavingGoal = handleSavingGoal;
  window.handleRetirementSubmit = handleRetirementSubmit;
  window.menuOption = menuOption;
  window.closeModal = closeModal;
  window.openModal = openModal;
} catch(err) {}