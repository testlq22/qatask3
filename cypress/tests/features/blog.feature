Feature: Blog

    Scenario Outline: Open Telnyx Website & check Sign up link in header should open Sign up page

        Given User open "Telnyx" main page
        When Click "Blog" in header
        Then User redirected at the blog page
        

        
      
        