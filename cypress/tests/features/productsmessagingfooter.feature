Feature: Products Messaging footer

    Scenario Outline: Open Telnyx Website & check See all Products link in footer should open all Products page

        Given User open "Telnyx" main page and want to check "See all Products" link in footer
        When Click "See all Products" link in footer
        Then User check Products Messaging section to contain 7 points
        

        
      
        