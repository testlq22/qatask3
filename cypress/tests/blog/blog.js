import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User open "Telnyx" main page', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "Blog" in header', () => {
    mainPage.clickBlogLink()
})

Then('User redirected at the blog page', () => {
    cy.get('h1').should('have.text', 'Blog')    
})