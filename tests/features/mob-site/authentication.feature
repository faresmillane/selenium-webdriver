@Authentication
Feature: Authentication
  
  Background:
    Given I start my navigator in "home_page"
    Then I navigate to "login_page"

  @GoodAuthenticate
  Scenario: I can login using my credentials
    Given I am a "registered" user 
    When I fill my "login_email" "registered" user
    And I fill my "login_password" "registered" user
    And I click on the "me_connecter" button
    Then I access in the "account_page" screen

  @BadAuthenticate
  Scenario: I canot login using bad credentials
    Given I am a "unknow" user 
    When I fill my "login_email" "unknow" user
    And I fill my "login_password" "unknow" user
    And I click on the "me_connecter" button
    Then I see the "bad_credentials" label
  
   @AccountCreation
  Scenario: I can sign up using my informations
    Given I am a "new" user
    And I click on the "continuer" button
    When I fill my "signup_email" "new" user
    And I fill my "signup_password" "new" user
    And I click on my "gender" "new" user
    And I fill my "first_name" "new" user
    And I fill my "last_name" "new" user
    And I fill my "day_of_birth" "new" user
    And I fill my "month_of_birth" "new" user
    And I fill my "year_of_birth" "new" user
    And I click on the "creer_compte" button
    Then I access in the "account_page" screen
    And I see the "mon_compte" label
  
