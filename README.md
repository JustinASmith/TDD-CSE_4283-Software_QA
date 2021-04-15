<p align="center">
  <h2 align="center">TDD - Software Testing QA - CSE 4283 Spring 2021</h2>
</p>
<p align="center">
  <a href="https://github.com/JustinASmith/TDD-CSE_4283-Software_QA/actions">
    <img alt="Node Continuous Integration Passing" src="https://github.com/JustinASmith/TDD-CSE_4283-Software_QA/actions/workflows/integrate.yml/badge.svg" />
  </a>
  <a href="https://github.com/JustinASmith/TDD-CSE_4283-Software_QA/actions">
    <img alt="Firebase Continuous Deployment Passing" src="https://github.com/JustinASmith/TDD-CSE_4283-Software_QA/actions/workflows/deploy.yml/badge.svg?branch=main" />
  </a>
  <a href='https://coveralls.io/github/JustinASmith/TDD-CSE_4283-Software_QA?branch=main'><img src='https://coveralls.io/repos/github/JustinASmith/TDD-CSE_4283-Software_QA/badge.svg?branch=add_coverage' alt='Coverage Status' /></a>
  <a href="https://wakatime.com/badge/github/JustinASmith/TDD-CSE_4283-Software_QA">
    <img alt="Time Tracking" src="https://wakatime.com/badge/github/JustinASmith/TDD-CSE_4283-Software_QA.svg" />
  </a>
</p>

<p align="center">
  <img width="48%" alt="Screen Shot 2021-03-01 at 2 20 40 PM" src="https://user-images.githubusercontent.com/28692620/109554037-5a63b180-7a99-11eb-9dce-acab305ab365.png">
  <img width="48%" alt="Screen Shot 2021-03-01 at 2 20 50 PM" src="https://user-images.githubusercontent.com/28692620/109554047-5e8fcf00-7a99-11eb-98be-250dd65f7109.png">
</p>

# Objective

Apply test-driven development (TDD) to implement a set of software requirements for Software Testing and Quality Assurance - CSE 4283, Mississippi State University - Spring 2021

Write unit tests to provide adequate coverage of a code-base using chosen unit testing framework and test runner.

# Requirements

Develop a CLI or GUI app that prompts the user to select a function to execute and allows the user to gracefully exit the app when desired.

The menu should be displayed after each function (if app is CLI) unless the user exits. For now, the app must have the following functionalities:

1. **Body Mass Index -** Input height in feet and inches. Input weight in pounds.
   Return BMI value and category:
   - \*If BMI falls below **18.5\***, it falls within the underweight range.
   - \*If BMI is between **18.5 to 24.9\***, it falls within the normal or Healthy Weight range.
   - \*If BMI is **25.0 to 29.9\***, it falls within the overweight range.
   - \*If BMI is **30.0 or higher\***, it falls within the obese range.
2. **Retirement** - Input user's current age, annual salary, percent saved (employer matches 35% of savings). Input desired retirement savings goal. Output what age savings goal will be met. You can assume death at 100 years (therefor, indicate if the savings goal is not met).

# Notes & Resources

- BMI Formula - http://extoxnet.orst.edu/faqs/dietcancer/web2/twohowto.html
- **Remember**, unit tests serve as documentation - your tests should indicate the features of the program
