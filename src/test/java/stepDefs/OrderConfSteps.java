package stepDefs;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class OrderConfSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@Then("I should be landed on Your Order is Confirmed page")
	public void i_should_be_landed_on_Your_Order_is_Confirmed_page() {
		WebElement eleTextOrderConf = driver.findElement(By.xpath("//h3[contains(text(),\"Your Order is Confirmed!!\")]"));
		System.out.println(eleTextOrderConf.getText());
	}
	
	
	@Then("I verify text Invoice")
	public void i_verify_text_Invoice() {
		WebElement eleTextInvoice = driver.findElement(By.xpath("//h2[contains(text(),\"Invoice\")]"));
		System.out.println(eleTextInvoice.getText());
	}

	@Then("I verify Order number")
	public void i_verify_Order_number() {
		WebElement eleTextOrderNum = driver.findElement(By.xpath("//h3[contains(text(),\"Order # 3\")]"));
		System.out.println(eleTextOrderNum.getText());
	}

	@Then("I verify Billed To address")
	public void i_verify_Billed_To_address() {
		WebElement eleBilledAddr = driver.findElement(By.xpath("(//div[@class=\"col-xs-6\"])[1]"));
		System.out.println(eleBilledAddr.getText());
	}

	@Then("I verify Shipped To address")
	public void i_verify_Shipped_To_address() {
		WebElement eleShippedAddr = driver.findElement(By.xpath("(//div[@class=\"col-xs-6 text-right\"])[1]"));
		System.out.println(eleShippedAddr.getText());
	}

	@Then("I verify Payment Method")
	public void i_verify_Payment_Method() {
		WebElement elePayMethod = driver.findElement(By.xpath("(//div[@class=\"col-xs-6\"])[2]"));
		System.out.println(elePayMethod.getText());
	}

	@Then("I verify Order Date")
	public void i_verify_Order_Date() {
		WebElement eleOrderDate = driver.findElement(By.xpath("(//div[@class=\"col-xs-6 text-right\"])[2]"));
		System.out.println(eleOrderDate.getText());
	}

	@Then("I verify Order Summary")
	public void i_verify_Order_Summary() throws InterruptedException {
		int colCnt=0;
		int divisor=4;
		int rowCnt=0;
		WebElement eleOrderSummary = driver.findElement(By.xpath("//div[@class=\"panel-heading\"]"));
		System.out.println(eleOrderSummary.getText());
		
		List<WebElement> tableData = driver.findElements(By.xpath("//table[@class=\"table table-condensed\"]//td"));
		for(WebElement data: tableData) {
			System.out.print(data.getText() + '\t'+ '\t');
			colCnt++;
			if((colCnt%divisor) == 0) {
				System.out.println();
			}
		}
		Thread.sleep(5000);
	}

	@When("I click on Continue Shopping")
	public void i_click_on_Continue_Shopping() {
		WebElement eleContShopping = driver.findElement(By.xpath("//a[contains(text(),\"Continue Shopping\")]"));
		eleContShopping.click();
	}
}
