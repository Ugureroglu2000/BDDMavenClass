package Tests.StepDefinitions;


import Tests.Pages.*;
import Tests.Utilities.ConfigurationReader;
import Tests.Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.ArrayList;
import java.util.List;

public class Cancel {
    @Given("User in checkout page")
    public void user_in_checkout_page() throws InterruptedException {
        String url= ConfigurationReader.get("url");
        Driver.get().get(url);
        LoginPage loginPage=new LoginPage();
        loginPage.login();
        List<String> list = new ArrayList<>();
        InventoryPage inventoryPage=new InventoryPage();
        inventoryPage.add("Bike"); list.add("Bike");
        inventoryPage.add("Backpack"); list.add("Backpack");
        inventoryPage.ShoppingCart.click();
        CartPage cartPage=new CartPage();
        cartPage.checkout.click();
        Thread.sleep(3000);
    }
    @When("User enters personal information")
    public void user_enters_personal_information() throws InterruptedException {
        Checkout1Page co1p = new Checkout1Page();
        co1p.FirstName.sendKeys("AAAA");
        co1p.LastName.sendKeys("BBBB");
        co1p.PostalCode.sendKeys("CCCC");
        Thread.sleep(5000);
        co1p.ContinueButton.click();
    }

    @Then("User can cancel Payment")
    public void userCanCancelPayment() {
        Checkout2Page co2p = new Checkout2Page();
        co2p.cancelButton.click();
    }
}
