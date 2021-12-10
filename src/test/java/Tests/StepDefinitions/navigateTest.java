package Tests.StepDefinitions;

import Tests.Pages.HomePage;
import Tests.Utilities.BrowserUtils;
import Tests.Utilities.ConfigurationReader;
import Tests.Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;


import java.util.concurrent.TimeUnit;

import static Tests.Utilities.Driver.driver;

public class navigateTest {

    HomePage homePage=new HomePage();
    @Given("User is in HomePage")
    public void user_is_in_HomePage() {

        BrowserUtils.clickSafely(new HomePage().acceptCookiesButton);
        String ActualUrl=driver.getCurrentUrl();
        Assert.assertEquals(ActualUrl,"https://www.ii.co.uk/");

    }

    @When("User navigates to {string} {string}")
    public void user_navigates_to(String Modules, String Tabs) {
        homePage.goToModuleTab(Modules,Tabs);
    }



    @Then("User is in {string}")
    public void user_is_in(String TabName) {
        Assert.assertEquals(TabName,homePage.pageNames.get(homePage.pageNames.size()-1).getText());
        BrowserUtils.clickSafely(homePage.HomePageButton);
    }




}

