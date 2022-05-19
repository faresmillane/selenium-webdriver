@Authentication
Feature: Authentication

  Background:
    Given I start my navigator in "home_page"
    Then I navigate to "login_page"

  @AccountCreation
  Scenario: I can sign up using my informations (disable parallel)
    Given I am a "new" user
    And I click on the "continuer" button
    When I fill my "signup_email" "new" user
    And I fill my "signup_email_confirm" "new" user
    And I fill my "signup_password" "new" user
    And I click on my "gender" "new" user
    And I fill my "first_name" "new" user
    And I fill my "last_name" "new" user
    And I fill my "day_of_birth" "new" user
    And I fill my "month_of_birth" "new" user
    And I fill my "year_of_birth" "new" user
    And I click on the "creer_compte" submit button
    Then I access in the "account_page" screen
  
  @GoodAuthenticate
  Scenario: I can login using my credentials (disable parallel)
    Given I am a "registered" user 
    When I fill my "login_email" "registered" user
    And I fill my "login_password" "registered" user
    And I click on the "me_connecter" button
    Then I access in the "account_page" screen
  
  @BadAuthenticate
  Scenario: I can not login using my bad credentials
    Given I am a "unknow" user 
    When I fill my "login_email" "unknow" user
    And I fill my "login_password" "unknow" user
    And I click on the "me_connecter" button
    Then I access in the "login_page" screen
    And I see the "bad_credentials" label

  