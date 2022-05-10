@Navigation
Feature: Navigation

 Background:
    Given I start my navigator in "home_page"

  @HomePage
  Scenario: navigate to home page 
    Given I navigate to "home_page"
    When I access in the "home_page" screen
    Then I see the "home_page_header" label
    And I see the "home_page_body" label

  @LoginPage
  Scenario: navigate to login page 
    Given I navigate to "login_page"
    When I access in the "login_page" screen
    Then I see the "login_page" label
    And I see the "login_page_header" label
  
  @FastRegisterPage
  Scenario: navigate to fast resgister page 
    Given I navigate to "fast_register_page"
    When I access in the "fast_register_page" screen
    Then I see the "fast_page_header" label
    And I see the "inscription" label
    And I see the "connexion" label

  @CartPage
  Scenario: navigate to cart page 
    Given I navigate to "cart_page"
    When I access in the "cart_page" screen
    Then I see the "cart_page_header" label
    And I see the "cart_page" label

  @SearchPage
  Scenario: navigate to cart page 
    Given I navigate to "search_page"
    When I access in the "search_page" screen
    Then I see the "search_page_header" label
    And I see the "search_page" label

  @NavPage
  Scenario: navigate to cart page 
    Given I navigate to "nav_page"
    When I access in the "nav_page" screen
    Then I see the "nav_page_header" label
    And I see the "nav_page" label

# FP
# vérifier le montant min RSP
# en étant connecté : https://fr.shopping.rakuten.com/seller/sell-form?step=landing s'assurer de la présence essentiel des éléments