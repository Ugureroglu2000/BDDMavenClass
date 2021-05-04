package Tests.StepDefinitions;

import Tests.Pages.*;
import Tests.Utilities.ConfigurationReader;
import Tests.Utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;

public class CheckOut {
    @Given("User in checkout page one")
    public void userInCheckoutPageOne() throws InterruptedException {
        String url= ConfigurationReader.get("url");
        Driver.get().get(url);
        LoginPage loginPage=new LoginPage();
        loginPage.login();
        List<String> list = new ArrayList<>();
        InventoryPage inventoryPage=new InventoryPage();
        inventoryPage.add("Jacket"); list.add("Jacket");
        inventoryPage.ShoppingCart.click();
        CartPage cartPage=new CartPage();
        cartPage.checkout.click();
        Thread.sleep(2000);
    }
    


    @When("User enters {string}, {string} and {string} with invalid credentials and click the continue button")
    public void userEntersAndWithInvalidCredentialsAndClickTheContinueButton(String firstName, String surname, String postCode) throws InterruptedException{
        Checkout1Page stepOne = new Checkout1Page();

        stepOne.FirstName.sendKeys(firstName);
        stepOne.LastName.sendKeys(surname);
        stepOne.PostalCode.sendKeys(postCode);
        Thread.sleep(5000);
        stepOne.ContinueButton.click();

    }

    @Then("User can not check out")
    public void userCanNotCheckOut() {

        String currentUrl=Driver.get().getCurrentUrl();
        Assert.assertTrue(currentUrl.contains("checkout-step-one.html"));
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
