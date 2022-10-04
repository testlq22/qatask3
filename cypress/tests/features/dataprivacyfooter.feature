Feature: Data Privacy footer

    Scenario Outline: Open Telnyx Website & check Data Privacy link in footer should open Data Privacy page

        Given User open "Telnyx" main page and want to check Data Privacy link in footer
        When Click "Data Privacy" in footer
        Then User redirected at the Data Privacy page
        

        
      
        