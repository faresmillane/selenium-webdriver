@BUY @buyersCrew
Feature: BUY - Buyer's crew

 @BUY @Crew2 @Sanity
 Scenario: on the crew modal, user can navigate to fast register page (disable parallel)
    Given I navigate to "_crew" page
    When I access in the "_crew" page
    And I "click" on the "_crew"."_s_inscrire" button
    Then I access in the "_fast_register" page

 @BUY @Crew3 @Sanity
 Scenario: on the crew modal, user can navigate to sign in page (disable parallel)
    Given I navigate to "_crew" page
    When I access in the "_crew" page
    And I "click" on the "_crew"."_se_connecter" button
    Then I access in the "_login" page

 @BUY @Crew4 @Sanity @Prod
 Scenario: on the crew modal, connected user can see activer remboursement
    Given I am a "users"."registered" user
    And I navigate to "_login" page 
    And I write "my_login_email" in the "_login"."_login_email" field
    And I write "my_login_password" in the "_login"."_login_password" field
    And I "click" on the "_login"."_me_connecter" button
    When I navigate to "_crew" page
    Then I see the "_crew"."_activer_remboursement" label

 @BUY @Crew5 
 Scenario: on the crew modal, connected user can see activer remboursement
    Given I am a "users"."registered" user
    And I navigate to "_login" page
    And I write "my_login_email" in the "_login"."_login_email" field
    And I write "my_login_password" in the "_login"."_login_password" field
    And I "click" on the "_login"."_me_connecter" button
    When I navigate to "_crew" page
    And I "click" on the "_crew"."_activer_remboursement" button
    Then I see the "_crew"."_vous_avez_fait_votre_achat" label
    And I switch to "_partner" "window" between "_crew" page

 @BUY @Crew6
 Scenario: on the crew modal, connected user can see FAQ
    Given I am a "users"."registered" user
    And I navigate to "_login" page
    And I write "my_login_email" in the "_login"."_login_email" field
    And I write "my_login_password" in the "_login"."_login_password" field
    And I "click" on the "_login"."_me_connecter" button
    And I access in the "_account" page
    When I navigate to "_crew" page
    And I "click" on the "_crew"."_activer_remboursement" button
    And I "click" on the "_crew"."_une_question" button
    And I switch to "_help_desk" "window" between "_crew" page