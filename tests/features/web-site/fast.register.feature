@FastRegister
Feature: Fast register

  Background:
    Given I navigate to "_fast_register" page

  @FastRegisterCreation @Sanity
    Scenario: I can sign up using fast register (disable parallel)
    Given I am a "users"."new" user 
    When I write "my_signup_email" in the "_fast_register"."_signup_email" field
    And I "click" on the "_fast_register"."_continuer" button
    And I write "my_signup_password" in the "_fast_register"."_signup_password" field
    And I "click" on the "_fast_register"."_sinscrire" button
    Then I access in the "_club_rakuten" page
    And I see the "_club_rakuten"."_club_r_popin" label
