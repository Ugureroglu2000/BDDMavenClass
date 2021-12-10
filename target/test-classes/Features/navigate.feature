@nav
Feature: User can navigate through Modules and Tabs

  Background:
    Given User is in HomePage


  Scenario Outline: User can navigate
    When  User navigates to "<Module>" "<Tab>"
    Then  User is in "<TabPage>"
    Examples:
      | Module          | Tab                  | TabPage             |
      | Services        | Trading account      | Trading account     |
      | Pensions        | What is a SIPP?      | What is a SIPP?     |
      | Investments     | Top UK shares        | Top UK shares ERROR |
      | Help & Learning | Super 60 Investments | ii Super 60         |

