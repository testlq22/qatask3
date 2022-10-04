import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User open "Telnyx" main page and want to check "See all Products" link in footer', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "See all Products" link in footer', () => {
    mainPage.clickAllProducts()
})

Then('User check Products Messaging section to contain 7 points', () => {
    cy.get(mainPage.messaging()).should(($lis) => {      
        expect($lis).to.have.length(7)
        expect($lis.eq(0)).to.contain('SMS')
        expect($lis.eq(1)).to.contain('Short Code SMS')
        expect($lis.eq(2)).to.contain('MMS')
        expect($lis.eq(3)).to.contain('Toll-Free SMS')
        expect($lis.eq(4)).to.contain('WhatsApp Business API')
        expect($lis.eq(5)).to.contain('A2P 10DLC')
        expect($lis.eq(6)).to.contain('Alphanumeric Sender ID')        
      })    
})