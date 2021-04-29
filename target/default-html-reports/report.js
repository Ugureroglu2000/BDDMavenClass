$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/inventory.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@inventory"
    }
  ]
});
formatter.scenario({
  "name": "User can Select and Add items to the cart from Inventory Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@inventory"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.NullPointerException\r\n\tat Tests.StepDefinitions.hooks.before(hooks.java:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User is in Inventory page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.Inventory.user_is_in_Inventory_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select and click add item",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.Inventory.user_select_and_click_add_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The item is in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.Inventory.the_item_is_in_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat Tests.StepDefinitions.hooks.after(hooks.java:25)\r\n",
  "status": "failed"
});
});