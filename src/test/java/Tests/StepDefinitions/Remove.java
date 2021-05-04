package Tests.StepDefinitions;

import Tests.Pages.CartPage;
import Tests.Pages.Checkout2Page;
import Tests.Pages.InventoryPage;
import Tests.Pages.LoginPage;
import Tests.Utilities.ConfigurationReader;
import Tests.Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;

public class Remove {
    @Given("{int} items in the cart")
    public void itemsInTheCart(int arg0) throws InterruptedException {
        String url= ConfigurationReader.get("url");
        Driver.get().get(url);
        LoginPage loginPage=new LoginPage();
        loginPage.login();
        List<String> list = new ArrayList<>();
        InventoryPage inventoryPage=new InventoryPage();
        inventoryPage.add("Bike"); list.add("Bike");
        inventoryPage.add("Backpack"); list.add("Backpack");


       inventoryPage.ShoppingCart.click();
           Thread.sleep(3000);

    }

    @When("User in cart page")
    public void userInCartPage() {
    }

    @Then("User can remove the items")
    public void userCanRemoveTheItems() throws InterruptedException {

        CartPage remove1 = new CartPage();
        remove1.removebackpack.click();
        remove1.removeBike.click();


    }
}


