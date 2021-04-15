const data = require("../fixtures/sample-data.json");

describe('The BMI Form', () => {

    it('successfully submits form and shows modal with result', () => {
        cy.visit('/')
        cy.get("#bmi-form")

        cy.get('input[name="feet"]').type(data.bmi.feet)
        cy.get('input[name="feet"]').should('have.value', data.bmi.feet)

        cy.get('input[name="inches"]').type(data.bmi.inches)
        cy.get('input[name="inches"]').should('have.value', data.bmi.inches)

        cy.get('input[name="pounds"]').type(data.bmi.pounds)
        cy.get('input[name="pounds"]').should('have.value', data.bmi.pounds)

        cy.get('#bmi-submit').click()

        cy.get('#bmi-modal')

        cy.get('#bmi-result').should('contain', '25.6')

        cy.get('#bmi-category').should('contain', 'Overweight')
    })
})

describe('The Retirement Form', () => {

    it('successfully submits form and shows modal with result', () => {
        cy.visit('/')
        cy.get('#retirement-menu').click()
        cy.get("#retirement-form")

        cy.get('input[name="age"]').type(data.retirement.age)
        cy.get('input[name="age"]').should('have.value', data.retirement.age)

        cy.get('input[name="salary"]').type(data.retirement.salary)
        cy.get('input[name="salary"]').should('have.value', data.retirement.salary)

        cy.get('input[name="percentSaved"]').type(data.retirement.percentSaved)
        cy.get('input[name="percentSaved"]').should('have.value', data.retirement.percentSaved)

        cy.get('input[name="goal"]').type(data.retirement.goal)
        cy.get('input[name="goal"]').should('have.value', data.retirement.goal)

        cy.get('#retirement-submit').click()

        cy.get('#retirement-modal')

        cy.get('#retirement-savings-per-year').should('contain', '$18900')
        cy.get('#retirement-years-til').should('contain', '53')
        cy.get('#retirement-age-goal-met').should('contain', '78')
        cy.get('#retirement-goal-met').should('contain', 'You will be alive!')
    })
})