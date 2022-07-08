Feature: API

  Scenario: registration new user
    Given I call "registration" api
    When I create a "new" user
    Then I have a "200" response

