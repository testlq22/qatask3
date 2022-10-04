import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User open Telnyx main page', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Network" in header', () => {
    mainPage.clickNetworkLink()
})

Then('User redirected at the network page', () => {
    cy.get('h1').should('have.text', 'The Global, Private Network Built for Real-Time Comms.')    
})