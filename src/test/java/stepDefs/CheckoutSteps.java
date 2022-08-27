package stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.When;

public class CheckoutSteps {
	
	WebDriver driver = BaseClass.driver;


	@When("I click on Checkout")
	public void i_click_on_Checkout() {
		WebElement eleCheckout = driver.findElement(By.xpath("//a[@href=\"/medicare/cart/validate\"]"));
		eleCheckout.click();
	}


}
