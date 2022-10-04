import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User open "Telnyx" main page and want to check Data Privacy link in footer', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Data Privacy" in footer', () => {
    mainPage.clickDataPrivacyFooter()
})

Then('User redirected at the Data Privacy page', () => {
    cy.get('h1').should('have.text', 'Data & Privacy')    
})