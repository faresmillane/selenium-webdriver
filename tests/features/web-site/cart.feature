Feature: Add to cart

  Background:
    Given I start my navigator in "home_page"
    
  @AddToCart
  Scenario: I can add a product to cart
    Given I navigate to "offer_page"
    And I see the "offer_page" label
    When I click on the "add_to_cart" button
    And I navigate to "cart_page"
    And I see the "cart_right_panel" label


# ajouter produit, puis se connecter et vérifier que le ânier est bien présent avec ses élements