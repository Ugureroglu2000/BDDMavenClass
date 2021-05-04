$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/cancel.feature");
formatter.feature({
  "name": "Canceling the payment during the checkout",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Cancel"
    },
    {
      "name": "@log"
    }
  ]
});
formatter.scenario({
  "name": "User can cancel the payment during the checkout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Cancel"
    },
    {
      "name": "@log"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User in checkout page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Cancel.user_in_checkout_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters personal information",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Cancel.user_enters_personal_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can cancel Payment",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Cancel.userCanCancelPayment()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "User may login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@log"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@log"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User enters username and password and click",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_enters_username_and_password_and_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can log in",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_can_log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can not login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@log"
    }
  ]
});
formatter.step({
  "name": "User enters \"usernameAli\" and \"password\" and click",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_enters_and_and_click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not login",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_can_not_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User can test several credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" and click",
  "keyword": "When "
});
formatter.step({
  "name": "User can not login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "Standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can test several credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@log"
    }
  ]
});
formatter.step({
  "name": "User enters \"Standard_user\" and \"secret_sauce\" and click",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_enters_and_and_click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not login",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_can_not_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can test several credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@log"
    }
  ]
});
formatter.step({
  "name": "User enters \"standard_user\" and \"secret_sauce\" and click",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_enters_and_and_click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not login",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Login.user_can_not_login()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat Tests.StepDefinitions.Login.user_can_not_login(Login.java:55)\r\n\tat ✽.User can not login(file:///C:/Users/HP/IdeaProjects/BDDMavenClass/src/test/resources/Features/login.feature:23)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/remove.feature");
formatter.feature({
  "name": "Removing the item from cart page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@log"
    },
    {
      "name": "@Remove"
    }
  ]
});
formatter.scenario({
  "name": "User can remove the items from cart page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@log"
    },
    {
      "name": "@Remove"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "2 items in the cart",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Remove.itemsInTheCart(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in cart page",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Remove.userInCartPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can remove the items",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Remove.userCanRemoveTheItems()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});