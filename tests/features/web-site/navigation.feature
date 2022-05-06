Feature: Navigation

  @HomePage
  Scenario: navigate to home page
    Given I navigate to <home_page>
    Then I see the <home_page_header> label
    And I see the <home_page_body> label

  @LoginPage
  Scenario: navigate to login page
    Given I navigate to <login_page>
    When I am in the <home_page> screen
    Then I access in the <login_page> screen

# FP
# vérifier le montant min RSP