Feature: Partners

    Scenario Outline: Open Telnyx Website & check Sign up link in header should open Sign up page

        Given User is at "Telnyx" main page and want to read about company partners
        When Click "Partners" in header
        Then User redirected at the "Partners" page
        

        
      
        