import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User open main page', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Log In" button', () => {
    mainPage.clickHeaderLogIn()
})

Then('User is at the login page', () => {
    cy.url().should('include', mainPage.logInUrlPart())
})