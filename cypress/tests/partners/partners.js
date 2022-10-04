import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User is at "Telnyx" main page and want to read about company partners', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Partners" in header', () => {
    mainPage.clickPartnersLink()
})

Then('User redirected at the "Partners" page', () => {
    cy.get('header').should('contain.text', 'PARTNERS')    
})