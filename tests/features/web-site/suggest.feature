@Suggest
Feature: Auto Suggest drop down on search bar
  # Enter feature description here
  Background:
    Given I navigate to "_home" page
    When I access in the "_home" page
    Then I see the "_home"."_header" label
    And I see the "_home"."_body" label

  @Prod @Sanity
  Scenario: Auto suggest display
    And I write "my_random_product" in the "_home"."_search_bar" field
    Then I see the "_home"."_suggest" label
    And I see the "_home"."_body" label
