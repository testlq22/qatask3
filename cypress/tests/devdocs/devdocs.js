import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User is at "Telnyx" main page', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Developer Docs" in header', () => {
    mainPage.clickDevDocsLink()
})

Then('User redirected at the documentation page', () => {
    cy.get('h1').should('have.text', 'Telnyx API Documentation')    
})