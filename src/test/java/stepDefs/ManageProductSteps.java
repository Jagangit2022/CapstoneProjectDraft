package stepDefs;

import java.awt.Desktop;
import java.io.File;
import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class ManageProductSteps {
	
	WebDriver driver = BaseClass.driver;
	
	
	@Then("I should be landed on the Admin Home page")
	public void i_should_be_landed_on_the_Admin_home_page() {
		WebElement eleLoginUser = driver.findElement(By.linkText("Vikas Kashyap"));
		String LoginUser = eleLoginUser.getText();
		Assert.assertEquals("Kavita Nigam", LoginUser);
		System.out.println(LoginUser);
	}
	@When("I click on Manage Product")
	public void i_click_on_Manage_Product() {
		WebElement eleManageProd = driver.findElement(By.xpath("//a[contains(text(),\"Manage Product\")]"));
		eleManageProd.click();
	}

	@Then("I should be landed on Product Management page")
	public void i_should_be_landed_on_Product_Management_page() {
		WebElement eleProdManagement = driver.findElement(By.xpath("//h4[contains(text(),\"Product Management\")]"));
		System.out.println(eleProdManagement.getText());
	}

	@Then("I enter Product name")
	public void i_enter_Product_name() {
		WebElement eleProductName = driver.findElement(By.xpath("//input[@placeholder=\"Product Name\"]"));
		eleProductName.sendKeys("Cephalexin");
	}

	@Then("I enter Brand name")
	public void i_enter_Brand_name() {
		WebElement eleProductName = driver.findElement(By.id("brand"));
		eleProductName.sendKeys("Keflex");
	}

	@Then("I enter Description")
	public void i_enter_Description() {
		WebElement eleProdDesc = driver.findElement(By.xpath("(//textarea[@id=\"description\"])[1]"));
		eleProdDesc.sendKeys("Cephalexin is a cephalospori antibiotic.It is used to treat infections caused by bacteria.");
	}

	@Then("I enter Unit price")
	public void i_enter_Unit_price() {
		WebElement eleUnitPrice = driver.findElement(By.id("unitPrice"));
		eleUnitPrice.clear();
		eleUnitPrice.sendKeys("27");
	}

	@Then("I enter Quantity")
	public void i_enter_Quantity() {
		WebElement eleQuantity = driver.findElement(By.id("quantity"));
		eleQuantity.clear();
		eleQuantity.sendKeys("100");
	}

	@When("I upload a file")
	public void i_upload_a_file() throws IOException, InterruptedException {
		WebElement eleChooseFile = driver.findElement(By.xpath("//input[@id=\"file\"]"));
		eleChooseFile.sendKeys("C:\\Users\\ADMIN\\Downloads\\Cephalexin.PNG");
		Thread.sleep(3000);
	}

	@When("I choose Category")
	public void i_choose_Category() throws InterruptedException {
		Select objSelect = new Select(driver.findElement(By.xpath("//Select[@id=\"categoryId\"]")));
		objSelect.selectByVisibleText("Antibiotics");
		Thread.sleep(3000);
	}

	@When("I click on Save")
	public void i_click_on_Save() {
		WebElement eleSave = driver.findElement(By.xpath("//input[@name=\"submit\"]"));
		eleSave.click();
	}

}
