import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User open "Telnyx" main page and want to check Programmable SMS link in footer', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Programmable SMS" in footer', () => {
    mainPage.clickSmsFooter()
})

Then('User redirected at the Programmable SMS page', () => {
    cy.get('h1').should('have.text', 'SMS API')    
})