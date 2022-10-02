import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('input[placeholder="Username"]').type(username)
    cy.get('input[placeholder="Password"]').type(password)
})

Then('User clicks on login button', () => {
    cy.get('button[type="submit"]').click()
})

Then('User is able to successfully login to the Website', () => {
    cy.get('#app').should('be.visible', {timeout: 10000})
})