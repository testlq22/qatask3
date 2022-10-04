import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User is at the main page', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Try for free" button', () => {
    mainPage.clickTryFreeButton()
})

Then('User is at the reg page', () => {
    cy.url().should('include', mainPage.signUpUrlPart())
})