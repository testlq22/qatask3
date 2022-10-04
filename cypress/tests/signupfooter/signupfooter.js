import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User at the main page want to check Sign up link in footer', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Sign up" button in footer', () => {
    mainPage.clickFooterSignUp()
})

Then('User at the registration page', () => {
    cy.url().should('include', "/sign-up")
})