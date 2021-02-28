const { BMI } = require("./BMI");

const bmi = new BMI();

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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(bmi.getBMI());
  }

  window.handleFeet = handleFeet;
  window.handleInches = handleInches;
  window.handlePounds = handlePounds;
  window.handleSubmit = handleSubmit;
} catch(err) {}