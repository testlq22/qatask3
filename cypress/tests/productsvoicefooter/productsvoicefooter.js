import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import mainPage from "../pages/main.page.js"
require("cypress-xpath")

beforeEach(()=>{
    cy.viewport(1280, 720)    
  })

Given('User open "Telnyx" main page and want to check See all Products link in footer', () => {
    mainPage.openStartPage()
    mainPage.closePopupWindow()
})

When('Click "See all Products" in footer', () => {
    mainPage.clickAllProducts()
})

Then('User check Voice section to contain 9 points', () => {
    cy.get(mainPage.voice()).should(($lis) => {      
        expect($lis).to.have.length(9)
        expect($lis.eq(0)).to.contain('SIP Trunking')
        expect($lis.eq(1)).to.contain('Voice API')
        expect($lis.eq(2)).to.contain('Outbound Calling')
        expect($lis.eq(3)).to.contain('Telnyx Video API')
        expect($lis.eq(4)).to.contain('Global Cloud Communications Platform')
        expect($lis.eq(5)).to.contain('Direct Routing for Microsoft Teams')
        expect($lis.eq(6)).to.contain('WebRTC')
        expect($lis.eq(7)).to.contain('SHAKEN/ STIR')
        expect($lis.eq(8)).to.contain('Branded Calling')        
      })    
})