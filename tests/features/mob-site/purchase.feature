Feature: Purchase

  Background:
    Given I navigate to "_offer" page
    And I "force_click" on the "_offer"."_add_to_cart" button
    
  @PurchaseOney4x
  Scenario: I can purchase with Oney 4x
    Given I am a "users"."oney4x_connected" user
    And I navigate to "_cart" page
    When I "click" on the "_cart"."_choisir_mode_livraison" button
    And I "force_click" on the "_shipping"."_passer_etape_suivante" button
    And I "force_click" on the "_adresse"."_passer_au_payment" button
    And I access in the "_payment" page
    And I "force_click" on the "_payment"."_oney4x" button
    Then I "click" on the "_payment"."_valider_payment" button
    And I access in the "e-payments.oney.com" page

  @PurchaseOney8x
  Scenario: I can purchase with Oney 8x
    Given I am a "users"."oney8x_connected" user
    And I navigate to "_cart" page
    When I "click" on the "_cart"."_choisir_mode_livraison" button
    And I "force_click" on the "_shipping"."_passer_etape_suivante" button
    And I "force_click" on the "_adresse"."_passer_au_payment" button
    And I access in the "_payment" page
    And I "force_click" on the "_payment"."_oney8x" button
    Then I "click" on the "_payment"."_valider_payment" button
    And I access in the "qlf-login.oney.fr/login" page
  
  @PurchaseOney12x
  Scenario: I can purchase with Oney 12x
    Given I am a "users"."oney12x_connected" user
    And I navigate to "_cart" page
    When I "click" on the "_cart"."_choisir_mode_livraison" button
    And I "force_click" on the "_shipping"."_passer_etape_suivante" button
    And I "force_click" on the "_adresse"."_passer_au_payment" button
    And I access in the "_payment" page
    And I "force_click" on the "_payment"."_oney12x" button
    Then I "click" on the "_payment"."_valider_payment" button
    And I access in the "qlf-login.oney.fr/login" page
  
  @PurchasePaypal
  Scenario: I can purchase with paypal
    Given I am a "users"."paypal_connected" user
    And I navigate to "_cart" page
    When I "click" on the "_cart"."_choisir_mode_livraison" button
    And I "force_click" on the "_shipping"."_passer_etape_suivante" button
    And I "force_click" on the "_adresse"."_passer_au_payment" button
    And I access in the "_payment" page
    And I "force_click" on the "_payment"."_paypal" button
    Then I "click" on the "_payment"."_valider_payment" button
    And I access in the "sandbox.paypal.com" page

  @PurchaseKlarna
  Scenario: I can purchase with klarna
    Given I am a "users"."klarna_connected" user
    And I navigate to "_cart" page
    When I "click" on the "_cart"."_choisir_mode_livraison" button
    And I "force_click" on the "_shipping"."_passer_etape_suivante" button
    And I "force_click" on the "_adresse"."_passer_au_payment" button
    And I access in the "_payment" page
    And I "force_click" on the "_payment"."_klarna" button
    Then I "click" on the "_payment"."_valider_payment" button
    And I access in the "pay.playground.klarna.com" page

