import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User open "Telnyx" main page and want to check Blog link in footer', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Blog" in footer', () => {
    mainPage.clickFooterBlogLink()
})

Then('User redirected at the Blog page', () => {
    cy.get('h1').should('have.text', 'Blog')    
})