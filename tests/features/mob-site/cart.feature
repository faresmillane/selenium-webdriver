Feature: Add to cart

  Background:
    Given I start my navigator in "home_page"
    
  @AddToCart
  Scenario: I can sign up using my informations (disable parallel)
    Given I navigate to "offer_page"
    And I see the "offer_page" label
    When I click on the "add_to_cart" button





# ajouter produit, puis se connecter et vérifier que le ânier est bien présent avec ses élements