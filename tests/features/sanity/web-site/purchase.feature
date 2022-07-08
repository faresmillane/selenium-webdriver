Feature: Purchase

  Background:
    Given I start my navigator in "home_page"
    And I navigate to "login_page"
    And I am a "new" user
    And I "click" on the "continuer" button
    When I fill my "signup_email" "new" user
    And I fill my "signup_email_confirm" "new" user
    And I fill my "signup_password" "new" user
    And I click on my "gender" "new" user
    And I fill my "first_name" "new" user
    And I fill my "last_name" "new" user
    And I fill my "day_of_birth" "new" user
    And I fill my "month_of_birth" "new" user
    And I fill my "year_of_birth" "new" user
    And I "force_click" on the "creer_compte" button
    Then I access in the "account_page" screen
    And I navigate to "offer_page"
    And I "click" on the "add_to_cart" button
    And I navigate to "cart_page"
    And I see the "cart_page_header" label  

  @Checkout @Desktop
  Scenario: I can add a product to cart (disable parallel)
    Given I am in the "cart_page" screen
    When I "click" on the "choisir_mode_livraison" button
    And I select the "Chronopost" "livraison" checkbox
    And I "force_click" on the "passer_etape_suivante" button
    And I access to "cart_livraion" screen between "cart_page" page
    And I fill my "livraison_adress" "new" user
    And I fill my "livraison_code" "new" user
    And I fill my "livraison_ville" "new" user
    And I fill my "livraison_phone_number" "new" user
    And I "click" on the "passer_au_payment" button
    And I fill my "card_number" "new" user
    And I fill my "card_expiration_date" "new" user
    And I fill my "card_secret" "new" user
    Then I "click" on the "valider_payment" button
    And I access to "validated_payment" screen between "cart_page" page
