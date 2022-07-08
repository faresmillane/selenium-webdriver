@Product
Feature: Product

  Background:
    Given I start my navigator in "home_page"

  @OfferBuyProductPage
  Scenario: navigate to offer product page 
    Given I navigate to "offer_page"
    And I access in the "offer_page" screen
    When I "click" on the "mode_livraisons" button
    Then I see the "shipping_popin" label