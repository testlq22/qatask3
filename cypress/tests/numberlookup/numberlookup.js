import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User is at "Telnyx" main page and want to read about Number Lookup', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Number Lookup" in header', () => {
    mainPage.clickNumberLookup()
})

Then('User redirected at the "Number Lookup" page', () => {
    cy.get('header').should('contain.text', 'Number Lookup')    
})