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
    And I see the "mega_banner" label

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
  Scenario: navigate to search page 
    Given I navigate to "search_page"
    When I access in the "search_page" screen
    Then I see the "search_page_header" label
    And I see the "search_page" label
    And I see the "search_listing_product" label

  @NavPage
  Scenario: navigate to nav page 
    Given I navigate to "nav_page"
    When I access in the "nav_page" screen
    Then I see the "nav_page_header" label
    And I see the "nav_page" label
    And I see the "category_block" label

  @EventPage
  Scenario: navigate to event page 
    Given I navigate to "event_page"
    When I access in the "event_page" screen
    Then I see the "event_page_header" label
    And I see the "event_page" label

  @MessagesPage
  Scenario: navigate to messages page 
    Given I navigate to "messages_page"
    And I am a "registered" user 
    And I access in the "login_page" screen
    When I fill my "login_email" "registered" user
    And I fill my "login_password" "registered" user
    And I "click" on the "me_connecter" button
    Then I access in the "messages_page" screen
    And I see the "messages_page" label
    And I see the "messages_page_header" label

  @PartSellerPage
  Scenario: navigate to part seller page 
    Given I navigate to "part_seller_page"
    And I am a "registered" user 
    And I access in the "login_page" screen
    When I fill my "login_email" "registered" user
    And I fill my "login_password" "registered" user
    And I "click" on the "me_connecter" button
    Then I access in the "part_seller_page" screen
    And I see the "part_seller_page" label
    And I see the "part_seller_header" label

  @BoutiquePage
  Scenario: navigate to booutique page 
    Given I navigate to "boutique_page"
    When I access in the "boutique_page" screen
    Then I see the "boutique_page" label
    And I see the "boutique_page_header" label

  @ProRegisterPage
  Scenario: navigate to pro register page 
    Given I navigate to "pro_seller_page"
    When I access in the "pro_seller_page" screen
    Then I see the "pro_seller_page" label
    And I see the "pro_seller_header" label
  
  @CrewPage
  Scenario: On the home page, user can see crew modal (disable parallel)
    Given I navigate to "crew_page"
    When I access in the "crew_page" screen
    Then I see the "crew_page" label
    And I see the "se_connecter" label
    And I see the "s_inscrire" label  
    And I see the "close" label