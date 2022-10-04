import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User is at "Telnyx" main page and want to read about company', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "About Telnyx" in header', () => {
    mainPage.clickAboutCompanyLink()
})

Then('User redirected at the "About Telnyx" page', () => {
    cy.get('header').should('contain.text', 'About Us')    
})