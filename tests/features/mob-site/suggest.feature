@Suggest
Feature: Auto Suggest drop down on search bar
  # Enter feature description here
  Background:
    Given I navigate to "_home" page

  @Sanity @Prod
  Scenario: Auto suggest display
    And I write "my_random_product" in the "_home"."_search_bar" field
    Then I see the "_home"."_suggest" label
    And I see the "_home"."_body" label

  #TODO
  Scenario: Auto suggest results contains the searched keyword