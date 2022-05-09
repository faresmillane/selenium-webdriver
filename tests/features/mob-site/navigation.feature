@Navigation
Feature: Navigation

  Background:
    Given I start my navigator in <home_page>

  @HomePage
  Scenario: navigate to home page
    Given I navigate to <home_page>
    When I access in the <home_page> screen
    Then I see the <home_page_header> label
    And I see the <home_page_body> label

  @LoginPage
  Scenario: navigate to login page
    Given I navigate to <login_page>
    When I access in the <login_page> screen
    Then I see the <login_page> label
  
 @FastRegisterPage
  Scenario: navigate to fast resgister page
    Given I navigate to <fast_register_page>
    When I access in the <fast_register_page> screen
    Then I see the <fast_page_header> label
    And I see the <inscription> label
    And I see the <connexion> label

# FP
# vérifier le montant min RSP