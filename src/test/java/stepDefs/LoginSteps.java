package stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class LoginSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@Given("I launch the URL")
	public void i_launch_the_url() throws InterruptedException {
		driver.get("http://localhost:8080/medicare/");
		Thread.sleep(2000);
	}

	@When("I click on homepage Login")
	public void i_click_on_homepage_login() {
		WebElement eleLogin = driver.findElement(By.linkText("Login"));
		eleLogin.click();
	}

	@Then("I should be landed on the Login page")
	public void i_should_be_landed_on_the_login_page() {
		driver.findElement(By.xpath("//*[@class='panel-heading']"));
		System.out.println("I am on login page");
	}

	@When("I enter username {string}")
	public void i_enter_username(String usrEmail) {
		WebElement eleEmail = driver.findElement(By.id("username"));
		eleEmail.sendKeys(usrEmail);
	}

	@When("I enter password {string}")
	public void i_enter_password(String passWord) {
		WebElement elePassWrd = driver.findElement(By.id("password"));
		elePassWrd.sendKeys(passWord);
	}

	@When("I click on Login")
	public void i_click_on_login() {
		WebElement eleLogin = driver.findElement(By.xpath("//input[@type='submit']"));
		eleLogin.click();
	}
	
	@SuppressWarnings("deprecation")
	@Then("I should be landed on the Home page")
	public void i_should_be_landed_on_the_home_page() {
		WebElement eleLoginUser = driver.findElement(By.linkText("Kavita Nigam"));
		String LoginUser = eleLoginUser.getText();
		Assert.assertEquals("Kavita Nigam", LoginUser);
		System.out.println(LoginUser);
	}
	
	@When("I cick on username")
	public void i_cick_on_username() {
		WebElement eleLoginUser = driver.findElement(By.linkText("Kavita Nigam"));
		eleLoginUser.click();
	}
	
	@And("I click on Logout")
	public void i_click_on_logout() {
		WebElement eleLogout = driver.findElement(By.linkText("Logout"));
		eleLogout.click();
	}
	
}
