@BUY @buyersCrew
Feature: BUY - Buyer's crew

 Background:
    Given I start my navigator in "home_page"

 @BUY @Crew1 @Desktop @Mobile
 Scenario: On the home page, user can see crew modal (disable parallel)
    Given I navigate to "crew_page"
    When I access in the "crew_page" screen
    Then I see the "crew_page" label
    And I see the "se_connecter" label
    And I see the "s_inscrire" label  
    And I see the "close" label  

 @BUY @Crew2 @Desktop @Mobile
 Scenario: on the crew modal, user can navigate to fast register page (disable parallel)
    Given I navigate to "crew_page"
    When I access in the "crew_page" screen
    And I "click" on the "s_inscrire" button
    Then I access in the "fast_register_page" screen

 @BUY @Crew3 @Desktop @Mobile
 Scenario: on the crew modal, user can navigate to sign in page (disable parallel)
    Given I navigate to "crew_page"
    When I access in the "crew_page" screen
    And I "click" on the "se_connecter" button
    Then I access in the "login_page" screen

 @BUY @Crew4 @Desktop @Mobile
 Scenario: on the crew modal, connected user can see activer remboursement
    Given I am a "registered" user
    And I navigate to "login_page" 
    And I fill my "login_email" "registered" user
    And I fill my "login_password" "registered" user
    And I "click" on the "me_connecter" button
    When I navigate to "crew_page"
    Then I see the "activer_remboursement" label

 @BUY @Crew5 @Desktop @Mobile
 Scenario: on the crew modal, connected user can see activer remboursement
    Given I am a "registered" user
    And I navigate to "login_page" 
    And I fill my "login_email" "registered" user
    And I fill my "login_password" "registered" user
    And I "click" on the "me_connecter" button
    When I navigate to "crew_page"
    And I "click" on the "activer_remboursement" button
    Then I see the "vous_avez_fait_votre_achat" label
    And I switch to "partner" "window" between "crew_page" page

 @BUY @Crew6 @Desktop @Mobile
 Scenario: on the crew modal, connected user can see FAQ
    Given I am a "registered" user
    And I navigate to "login_page" 
    And I fill my "login_email" "registered" user
    And I fill my "login_password" "registered" user
    And I "click" on the "me_connecter" button
    When I navigate to "crew_page"
    And I "click" on the "activer_remboursement" button
    And I "click" on the "une_question" button
    And I switch to "help_desk" "window" between "crew_page" page

