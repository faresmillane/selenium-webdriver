Feature: Purchase

  Background:
    Given I navigate to "login_page"
    And I am a "registered" user 
    When I fill my "login_email" "registered" user
    And I fill my "login_password" "registered" user
    And I "click" on the "me_connecter" button
    And I navigate to "offer_page"
    And I "click" on the "add_to_cart" button
    Then I navigate to "cart_page"
    And I see the "cart_page_header" label
    
  @Checkout @Desktop
  Scenario: I can add a product to cart
    Given I am in the "cart_page" screen
    When I "click" on the "choisir_mode_livraison" button
    And I select the "Chronopost" "livraison" checkbox
    And I "force_click" on the "passer_etape_suivante" button
    And I "click" on the "passer_au_payment" button
    And I fill my "card_number" "registered" user
    And I fill my "card_expiration_date" "registered" user
    And I fill my "card_secret" "registered" user
    Then I "click" on the "valider_payment" button
    And I access to "validated_payment" screen between "cart_page" page
  
  @Checkout @Mobile
  Scenario: I can add a product to cart
    Given I am in the "cart_page" screen
    When I "click" on the "choisir_mode_livraison" button
    And I navigate to "cart_shipping" in "cart_page" page
    And I select the "Chronopost" "livraison" checkbox
    And I "click" on the "passer_etape_suivante" button
    And I "click" on the "passer_au_payment" button
    And I access to "cart_checkout" screen between "cart_page" page
    And I fill my "card_number" "registered" user
    And I fill my "card_expiration_date" "registered" user
    And I fill my "card_secret" "registered" user
    Then I "click" on the "valider_payment" button
    And I access to "validated_payment" screen between "cart_page" page