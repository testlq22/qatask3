Feature: About Telnyx

    Scenario Outline: Open Telnyx Website & check Sign up link in header should open Sign up page

        Given User is at "Telnyx" main page and want to read about company
        When Click "About Telnyx" in header
        Then User redirected at the "About Telnyx" page
        

        
      
        