
Feature: Payment

  Background:
    Given I navigate to "_offer" page
    And I "force_click" on the "_offer"."_add_to_cart" button

  @PurchaseCard @Sanity
  Scenario: I can purchase with card (disable parallel)
    Given I am a "users"."card_connected" user
    And I navigate to "_cart" page
    When I "click" on the "_cart"."_choisir_mode_livraison" button
    And I "force_click" on the "_shipping"."_passer_etape_suivante" button
    And I "force_click" on the "_adresse"."_passer_au_payment" button
    And I access in the "_payment" page
    And I write "my_card_number" in the "_payment"."_card_number" field
    And I write "my_card_expiration_date" in the "_payment"."_card_expiration_date" field
    And I write "my_card_secret" in the "_payment"."_card_secret" field
    Then I "click" on the "_payment"."_valider_payment" button
    And I see the "_payment"."_success_payment" label