package stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ShippingAddrSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@Then("I should be landed on Select Shipping Address page")
	public void i_should_be_landed_on_Select_Shipping_Address_page() {
		WebElement eleShippingAddr = driver.findElement(By.xpath("//h4[contains(text(),\"Select Shipping Address\")]"));
		System.out.println(eleShippingAddr.getText());
	}

	@When("I click on select")
	public void i_click_on_select() {
		WebElement eleSelectBtn = driver.findElement(By.xpath("//a[@class=\"btn btn-primary\"]"));
		eleSelectBtn.click();
	}


}
