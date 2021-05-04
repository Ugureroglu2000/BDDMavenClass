@Checkout @log
Feature:  Not checkout with invalid credentials

  Background:
    Given User in checkout page one

  Scenario: User can not checkout with invalid credentials

    When User enters "FirstName", "SurName" and "PostCode" with invalid credentials and click the continue button
    Then User can not check out

  Scenario Outline: User can test several credentials

    When User enters "<First Name>", "<Surname>" and "<Post Code>" with invalid credentials and click the continue button
    Then User can not check out
    Examples:
      | First Name       | Surname       |    Post Code|
      | 123456           | Bbbbbbb        |    CCC     |
      |                  | Bbbbbbb        |    CCC     |