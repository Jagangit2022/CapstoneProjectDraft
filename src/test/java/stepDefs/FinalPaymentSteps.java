package stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FinalPaymentSteps {

	WebDriver driver = BaseClass.driver;
	
	@Then("I should be landed on Final Payment page")
	public void i_should_be_landed_on_Final_Payment_page() {
		WebElement eleFinalPayment = driver.findElement(By.xpath("//a[contains(text(),\" Final Payment\")]"));
		System.out.println(eleFinalPayment.getText());
	}

	@Then("I enter Card Number")
	public void i_enter_Card_Number() {
		WebElement eleCardNum = driver.findElement(By.xpath("//input[@id=\"cardNumber\"]"));
		eleCardNum.sendKeys("123456789000");
	}

	@Then("I enter Expiry Month")
	public void i_enter_Expiry_Month() {
		WebElement eleExpiryMnth = driver.findElement(By.id("expityMonth"));
		eleExpiryMnth.sendKeys("09");
	}

	@Then("I enter Expiry Year")
	public void i_enter_Expiry_Year() {
		WebElement eleExpiryYear = driver.findElement(By.id("expityYear"));
		eleExpiryYear.sendKeys("2027");
	}

	@Then("I enter CV code")
	public void i_enter_CV_code() {
		WebElement eleCVCode = driver.findElement(By.id("cvCode"));
		eleCVCode.sendKeys("072");
	}

	@When("I click on Pay")
	public void i_click_on_Pay() {
		WebElement elePayBtn = driver.findElement(By.xpath("//a[@class=\"btn btn-success btn-lg btn-block\"]"));
		elePayBtn.click();
	}
}
