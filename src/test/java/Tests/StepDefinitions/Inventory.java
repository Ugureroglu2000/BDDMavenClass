package Tests.StepDefinitions;

import Tests.Pages.CartPage;
import Tests.Pages.InventoryPage;
import Tests.Pages.LoginPage;
import Tests.Utilities.ConfigurationReader;
import Tests.Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class Inventory {
    @Given("User is in Inventory page")
    public void user_is_in_Inventory_page() {
        String url= ConfigurationReader.get("url");
        Driver.get().get(url);
        LoginPage loginPage=new LoginPage();
        loginPage.login();

    }
    InventoryPage inventoryPage=new InventoryPage();
    @When("User select and click add item")
    public void user_select_and_click_add_item() {

        inventoryPage.add("Bike");
        inventoryPage.add("Backpack");
    }

    @Then("The item is in cart")
    public void the_item_is_in_cart() {
        String order="Sauce Labs Bike Light, Sauce Labs Backpack";

        inventoryPage.ShoppingCart.click();
        CartPage cartPage=new CartPage();
        int num=0;
        for(int i=0;i<cartPage.ItemsList.size();i++){
            if(order.contains(cartPage.ItemsList.get(i).getText())){num++;      }
        }
        Assert.assertEquals(num,23);

    }

}
