@FastRegister
Feature: Fast register

  Background:
    Given I start my navigator in "home_page"
    Then I navigate to "fast_register_page"

  @FastRegisterCreation
    Scenario: I can sign up using fast register
    Given I am a "new" user 
    When I click on the "inscription" button
    And I fill my "signup_email" "new" user
    And I click on the "continuer" button
    And I access to "fast_register_sign_up" screen between "fast_register_page" page
    And I fill my "signup_password" "new" user
    And I click on the "sinscrire" button
    Then I access in the "fast_register_page" screen
  
  @FrGoodAuthenticate
  Scenario: I can login using good fast register credentials
    Given I am a "registered" user 
    And I click on the "connexion" button
    And I access in the "login_page" screen
    When I fill my "login_email" "registered" user
    And I fill my "login_password" "registered" user
    And I click on the "me_connecter" button
    Then I access in the "fast_register_page" screen

  @FrBadAuthenticate
  Scenario: I canot login using bad fast register credentials
    Given I am a "unknow" user 
    And I click on the "connexion" button
    And I access in the "login_page" screen
    When I fill my "login_email" "unknow" user
    And I fill my "login_password" "unknow" user
    And I click on the "me_connecter" button
    Then I see the "bad_credentials" label