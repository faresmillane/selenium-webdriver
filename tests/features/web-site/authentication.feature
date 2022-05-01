Feature: Authentication

  @Sanity @One
  Scenario: navigate to home page
    Given I navigate to <home_page>
    Then I see the <home_page_header> label
    And I see the <home_page_body> label

  @AccountCreation
  Scenario: I can sign up using my informations
    Given I navigate to <login_page>
    And I am a <new> user
    And I click on the <continuer> button
    When I fill my <signup_email> <new> user
    And I fill my <signup_email_confirm> <new> user
    And I fill my <signup_password> <new> user
    And I click on my <gender> <new> user
    And I fill my <first_name> <new> user
    And I fill my <last_name> <new> user
    And I fill my <day_of_birth> <new> user
    And I fill my <month_of_birth> <new> user
    And I fill my <year_of_birth> <new> user
    And I click on the <creer_compte> submit button
    Then I access in the <account_page> screen
    
  @Sanity
  Scenario: navigate to login page
    Given I navigate to <login_page>
    When I am in the <home_page> screen
    Then I access in the <login_page> screen
  
  @Authenticate1
  Scenario: I can login using my credentials
    Given I navigate to <login_page>
    And I am a <registered> user 
    When I fill my <login_email> <registered> user
    And I fill my <login_password> <registered> user
    And I click on the <me_connecter> button
    Then I access in the <account_page> screen

  @Authenticate2
  Scenario: I canot login using bad credentials
    Given I navigate to <login_page>
    And I am a <unknow> user 
    When I fill my <login_email> <unknow> user
    And I fill my <login_password> <unknow> user
    And I click on the <me_connecter> button
    Then I see the <bad_credentials> label
 
 
  
