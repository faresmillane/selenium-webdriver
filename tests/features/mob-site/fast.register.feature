@FastRegister
Feature: Fast register

  @FastRegisterCreation @Sanity
    Scenario: I can sign up using fast register
    Given I am a "users"."new" user
    And I navigate to "_fast_register" page 
    And I write "my_signup_email" in the "_fast_register"."_signup_email" field
    And I "click" on the "_fast_register"."_continuer" button
    And I write "my_signup_password" in the "_fast_register"."_signup_password" field
    And I "click" on the "_fast_register"."_sinscrire" button
    Then I access in the "_club_rakuten" page
    And I see the "_club_rakuten"."_club_r_popin" label
  
  @FrGoodAuthenticate @Sanity
  Scenario: I can login using good fast register credentials
    Given I am a "users"."registered" user 
    And I navigate to "_club_rakuten" page 
    And I "click" on the "_club_rakuten"."_connexion" button
    And I access in the "_login" page
    When I write "my_login_email" in the "_login"."_login_email" field
    And I write "my_login_password" in the "_login"."_login_password" field
    And I "click" on the "_login"."_me_connecter" button
    Then I access in the "_club_rakuten" page
    And I see the "_club_rakuten"."_body" label

  @FrBadAuthenticate @Sanity
  Scenario: I canot login using bad fast register credentials
    Given I am a "users"."unknow" user 
    And I navigate to "_club_rakuten" page 
    And I "click" on the "_club_rakuten"."_connexion" button
    And I access in the "_login" page
    When I write "my_login_email" in the "_login"."_login_email" field
    And I write "my_login_password" in the "_login"."_login_password" field
    And I "click" on the "_login"."_me_connecter" button
    Then I see the "_login"."_bad_credentials" label