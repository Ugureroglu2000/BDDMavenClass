  @log
  Feature: User may login
    Background:
    Given User is in login page


    Scenario: User can login with valid credentials

#      Given User is in login page
      When  User enters username and password and click
      Then  User can log in
    @wip
    Scenario: User can not login with invalid credentials
#      Given User is in login page
      When User enters "usernameAli" and "password" and click
      Then User can not login
