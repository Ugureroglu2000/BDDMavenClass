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
});