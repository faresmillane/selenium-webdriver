@Authentication
Feature: Authentication

  Background:
    Given I navigate to "_login" page

  @AccountCreation @Sanity
  Scenario: I can sign up using my informations (disable parallel)
    Given I am a "users"."new" user
    And I "click" on the "_login"."_continuer" button
    When I write "my_signup_email" in the "_login"."_signup_email" field
    And I write "my_signup_email_confirm" in the "_login"."_signup_email_confirm" field
    And I write "my_signup_password" in the "_login"."_signup_password" field
    And I "force_click" on the "_login"."_mr_gender" button
    And I write "my_first_name" in the "_login"."_first_name" field
    And I write "my_last_name" in the "_login"."_last_name" field
    And I write "my_day_of_birth" in the "_login"."_day_of_birth" field
    And I write "my_month_of_birth" in the "_login"."_month_of_birth" field
    And I write "my_year_of_birth" in the "_login"."_year_of_birth" field
    Then I "force_click" on the "_login"."_creer_compte" button
  
  @GoodAuthenticate @Sanity @Prod
  Scenario: I can login using my credentials (disable parallel)
    Given I am a "users"."registered" user 
    When I write "my_login_email" in the "_login"."_login_email" field
    And I write "my_login_password" in the "_login"."_login_password" field
    And I "click" on the "_login"."_me_connecter" button
    Then I access in the "_account" page
    And I see the "_account"."_mon_compte" label
    And I see the "_account"."_mes_achats" label
  
  @BadAuthenticate @Sanity @Prod
  Scenario: I can not login using my bad credentials
    Given I am a "users"."unknow" user 
    When I write "my_login_email" in the "_login"."_login_email" field
    And I write "my_login_password" in the "_login"."_login_password" field
    And I "click" on the "_login"."_me_connecter" button
    Then I access in the "_login" page
    And I see the "_login"."_bad_credentials" label

  @OtpAuthenticate @Sanity
  Scenario: I can login using my credentials and OTP
    Given I am a "users"."otp" user 
    When I write "my_login_email" in the "_login"."_login_email" field
    And I write "my_login_password" in the "_login"."_login_password" field
    And I "click" on the "_login"."_me_connecter" button
    And I access in the "_otp" page
    And I write "my_digit" in the "_otp"."_digit" field
    Then I access in the "_account" page
    And I see the "_account"."_mon_compte" label