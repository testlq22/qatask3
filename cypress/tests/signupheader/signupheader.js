import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User at the main page', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Sign up" button in header', () => {
    mainPage.clickHeaderSignUp()
})

Then('User at the reg page', () => {
    cy.url().should('include', "/sign-up")
})

Then('User click "Create Account" button and error message is visible', () => {
    //cy.url().should('include', "/sign-up")
    mainPage.clickCreateAccountButton()
    cy.get(mainPage.errorEmail()).should('be.visible')
    cy.get(mainPage.errorName()).should('be.visible')
})