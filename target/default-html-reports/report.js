$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/navigate.feature");
formatter.feature({
  "name": "User can navigate through Modules and Tabs",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@nav"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User can navigate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigates to \"\u003cModule\u003e\" \"\u003cTab\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User is in \"\u003cTabPage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Module",
        "Tab",
        "TabPage"
      ]
    },
    {
      "cells": [
        "Services",
        "Trading account",
        "Trading account"
      ]
    },
    {
      "cells": [
        "Pensions",
        "What is a SIPP?",
        "What is a SIPP?"
      ]
    },
    {
      "cells": [
        "Investments",
        "Top UK shares",
        "Top UK shares ERROR"
      ]
    },
    {
      "cells": [
        "Help \u0026 Learning",
        "Super 60 Investments",
        "ii Super 60"
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
  "name": "User is in HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_is_in_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can navigate",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@nav"
    }
  ]
});
formatter.step({
  "name": "User navigates to \"Services\" \"Trading account\"",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in \"Trading account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_is_in(java.lang.String)"
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
  "name": "User is in HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_is_in_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can navigate",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@nav"
    }
  ]
});
formatter.step({
  "name": "User navigates to \"Pensions\" \"What is a SIPP?\"",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in \"What is a SIPP?\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_is_in(java.lang.String)"
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
  "name": "User is in HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_is_in_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can navigate",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@nav"
    }
  ]
});
formatter.step({
  "name": "User navigates to \"Investments\" \"Top UK shares\"",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in \"Top UK shares ERROR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_is_in(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cTop UK shares[ ERROR]\u003e but was:\u003cTop UK shares[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat Tests.StepDefinitions.navigateTest.user_is_in(navigateTest.java:40)\r\n\tat ✽.User is in \"Top UK shares ERROR\"(file:///C:/Users/Ugurr/IdeaProjects/ii-BDDMavenClass/src/test/resources/Features/navigate.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
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
  "name": "User is in HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_is_in_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can navigate",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@nav"
    }
  ]
});
formatter.step({
  "name": "User navigates to \"Help \u0026 Learning\" \"Super 60 Investments\"",
  "keyword": "When "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in \"ii Super 60\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.StepDefinitions.navigateTest.user_is_in(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});