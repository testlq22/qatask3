Feature: Sign up by link in header

    Scenario Outline: Open Telnyx Website & check Sign up link in header should open Sign up page

        Given User at the main page
        When Click "Sign up" button in header
        Then User at the reg page
        Then User click "Create Account" button and error message is visible

        
      
        