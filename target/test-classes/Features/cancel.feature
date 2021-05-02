@Cancel @log
  Feature: Canceling the payment during the checkout

    Scenario: User can cancel the payment during the checkout
      Given User in checkout page
      When User enters personal information
      Then User can cancel Payment