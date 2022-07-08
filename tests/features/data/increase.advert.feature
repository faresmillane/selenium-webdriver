@Stock
Feature: Increase product stock

  @IncreaseStock
  Scenario: a-seller pro authentication (disable parallel)
    Given I start my navigator in "home_page"
    And I am a "seller" user 
    And I navigate to "login_page"
    When I fill my "login_email" "seller" user
    And I fill my "login_password" "seller" user
    And I "click" on the "me_connecter" button
    Then I access in the "account_page" screen

  @IncreaseStock
  Scenario: b-seller pro increase product stock (disable parallel)
    Given I navigate to "advert_page" in "account_page" page
    And I see the "stock_number" label
    When I fill my "stock_number" "seller" user
    Then I "click" on the "registrer_les_modifications" button
