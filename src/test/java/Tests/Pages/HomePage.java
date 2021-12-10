package Tests.Pages;

import Tests.Utilities.*;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends BasePage {
    public HomePage() { PageFactory.initElements(Driver.get(),this);      }

    @FindBy(id="homepage-banner")
    public WebElement HomePageBanner;

}
