Feature: Add to cart

  @AddProductToCart
  Scenario: add product to page
    Given I navigate to <home_page>
    Then I see the <home_page_header> label
    And I see the <home_page_body> label





# ajouter produit, puis se connecter et vérifier que le ânier est bien présent avec ses élements