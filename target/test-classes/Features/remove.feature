 @log @Remove
Feature: Removing the item from cart page

  Scenario: User can remove the items from cart page
    Given 2 items in the cart
    When User in cart page
    Then User can remove the items