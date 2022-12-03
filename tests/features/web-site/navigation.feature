@Navigation
Feature: Navigation

  @HomePage @Sanity @Prod
  Scenario: navigate to home page 
    Given I navigate to "_home" page
    When I access in the "_home" page
    Then I see the "_home"."_header" label
    And I see the "_home"."_body" label
    And I see "Mettre en vente" text in the "_home"."_vente" field

  @LoginPage @Sanity @Prod
  Scenario: navigate to login page 
    Given I navigate to "_login" page
    When I access in the "_login" page
    Then I see the "_login"."_me_connecter" label
    And I see the "_login"."_header" label
  
  @FastRegisterPage @Sanity
  Scenario: navigate to fast resgister page 
    Given I navigate to "_club_rakuten" page
    When I access in the "_club_rakuten" page
    Then I see the "_club_rakuten"."_header" label
    And I see the "_club_rakuten"."_header" label
    And I see the "_club_rakuten"."_connexion" label

  @CartPage @Sanity @Prod 
  Scenario: navigate to cart page 
    Given I navigate to "_cart" page
    When I access in the "_cart" page
    Then I see the "_cart"."_header" label
    And I see the "_cart"."_body" label

  @SearchPage @Sanity @Prod
  Scenario: navigate to search page 
    Given I navigate to "_search" page
    When I access in the "_search" page
    Then I see the "_search"."_header" label
    And I see the "_search"."_body" label
    And I see the "_search"."_listing_product" label

  @NavPage @Sanity @Prod
  Scenario: navigate to nav page 
    Given I navigate to "_nav" page
    When I access in the "_nav" page
    Then I see the "_nav"."_header" label
    And I see the "_nav"."_body" label
    And I see the "_nav"."_category_block" label

  @EventPage @Sanity @Prod
  Scenario: navigate to event page
    Given I navigate to "_event" page
    When I access in the "_event" page
    Then I see the "_event"."_header" label
    And I see the "_event"."_body" label

  @MessagesPage @Sanity @Prod
  Scenario: navigate to messages page 
    Given I navigate to "_messages" page
    And I am a "users"."registered" user 
    And I access in the "_login" page
    When I write "my_login_email" in the "_login"."_login_email" field
    And I write "my_login_password" in the "_login"."_login_password" field
    And I "click" on the "_login"."_me_connecter" button
    Then I access in the "_messages" page
    And I see the "_messages"."_header" label
    And I see the "_messages"."_body" label

  @PartSellerPage @Sanity @Prod
  Scenario: navigate to part seller page 
    Given I navigate to "_part_seller" page
    And I am a "users"."registered" user 
    And I access in the "_login" page
    When I write "my_login_email" in the "_login"."_login_email" field
    And I write "my_login_password" in the "_login"."_login_password" field
    And I "click" on the "_login"."_me_connecter" button
    Then I access in the "_part_seller" page
    And I see the "_part_seller"."_header" label
    And I see the "_part_seller"."_body" label

  @BoutiquePage @Sanity @Prod
  Scenario: navigate to booutique page 
    Given I navigate to "_boutique" page
    When I access in the "_boutique" page
    Then I see the "_boutique"."_header" label
    And I see the "_boutique"."_body" label

  @ProRegisterPage @Sanity @Prod
  Scenario: navigate to pro register page 
    Given I navigate to "_pro_seller" page
    When I access in the "_pro_seller" page
    Then I see the "_pro_seller"."_header" label
    And I see the "_pro_seller"."_body" label

  @BUY @CrewPage @Sanity @Prod
  Scenario: On the home page, user can see crew modal (disable parallel)
    Given I navigate to "_crew" page
    When I access in the "_crew" page
    Then I see the "_crew"."_body" label
    And I see the "_crew"."_s_inscrire" label
    And I see the "_crew"."_se_connecter" label 
    And I see the "_crew"."_close" label