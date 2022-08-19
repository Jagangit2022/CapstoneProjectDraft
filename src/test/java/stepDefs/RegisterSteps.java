package stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class RegisterSteps {
	
	WebDriver driver = BaseClass.driver;

	@When("I click Register Here link")
	public void i_click_register_here_link() {
		WebElement eleRegisterHere = driver.findElement(By.linkText("Register Here"));
		eleRegisterHere.click();
	}

	@Then("I should be landed on the SignUp_Personal page")
	public void i_should_be_landed_on_the_sign_up_personal_page() {
		WebElement eleSignUpPersonal = driver.findElement(By.xpath("//h4[contains(text(),'Sign Up - Personal')]"));
	}

	@Then("I enter first name {string}")
	public void i_enter_first_name(String fName) {
		WebElement eleFirstName = driver.findElement(By.id("firstName"));
		eleFirstName.sendKeys(fName);
	}

	@Then("I enter last name {string}")
	public void i_enter_last_name(String lName) {
		WebElement eleLastName = driver.findElement(By.id("lastName"));
		eleLastName.sendKeys(lName);
	}
	
	@Then("I enter email {string}")
	public void i_enter_email(String eMail) {
		WebElement eleEmail = driver.findElement(By.id("email"));
		eleEmail.sendKeys(eMail);
	}

	@Then("I enter contact number {string}")
	public void i_enter_contact_number(String contNum) {
		WebElement eleContactNum = driver.findElement(By.id("contactNumber"));
		eleContactNum.sendKeys(contNum);
	}

	@Then("I enter signup password {string}")
	public void i_enter_signup_password(String signupPwd) {
		WebElement eleSignUpPwd = driver.findElement(By.id("password"));
		eleSignUpPwd.sendKeys(signupPwd);
	}

	@Then("I enter confirm password {string}")
	public void i_enter_confirm_password(String confPwd) {
		WebElement eleConfPwd = driver.findElement(By.id("confirmPassword"));
		eleConfPwd.sendKeys(confPwd);
	}
	
	@Then("I select role")
	public void i_select_role() throws InterruptedException {
		WebElement eleUser = driver.findElement(By.id("role1"));
		String roleFlag = eleUser.getAttribute("checked");
		System.out.println("Role Flag : "+roleFlag);
		
		if(roleFlag.equals("true")) {
			WebElement eleSupplier = driver.findElement(By.id("role2"));
			eleSupplier.click();
			System.out.println("Changed role to Supplier");
		}
		Thread.sleep(5000);
	}

	@When("I click on NextBilling")
	public void i_click_on_next_billing() {
		WebElement eleNextBillingBtn = driver.findElement(By.xpath("//button[@type='submit']"));
		eleNextBillingBtn.click();
		
	}

	@Then("I should be landed on the SignUp_Address page")
	public void i_should_be_landed_on_the_sign_up_address_page() {
		WebElement eleSignUpAddr = driver.findElement(By.xpath("//h4[contains(text(),'Sign Up - Address')]"));
	}

	@Then("I enter address line1 {string}")
	public void i_enter_address_line1(String addrLine1) {
		WebElement eleAddrLine1 = driver.findElement(By.id("addressLineOne"));
		eleAddrLine1.sendKeys(addrLine1);
	}

	@Then("I enter address line2 {string}")
	public void i_enter_address_line2(String addrLine2) {
		WebElement eleAddrLine2 = driver.findElement(By.id("addressLineTwo"));
		eleAddrLine2.sendKeys(addrLine2);
	}

	@Then("I enter city {string}")
	public void i_enter_city(String cityVal) {
		WebElement eleCity = driver.findElement(By.id("city"));
		eleCity.sendKeys(cityVal);
	}

	@Then("I enter postal code {string}")
	public void i_enter_postal_code(String postCode) {
		WebElement elePostCode = driver.findElement(By.id("postalCode"));
		elePostCode.sendKeys(postCode);
	}

	@Then("I enter state {string}")
	public void i_enter_state(String stateVal) {
		WebElement eleState = driver.findElement(By.id("state"));
		eleState.sendKeys(stateVal);
	}

	@Then("I enter country {string}")
	public void i_enter_country(String countryVal) {
		WebElement eleCountryVal = driver.findElement(By.id("country"));
		eleCountryVal.sendKeys(countryVal);
	}

	@When("I click on NextConfirm")
	public void i_click_on_next_confirm() throws InterruptedException {
		//WebElement eleNextConfirmBtn = driver.findElement(By.xpath("(//button[@type=\"submit\"])[2]"));
		WebElement eleNextConfirmBtn = driver.findElement(By.xpath("//*[contains(text(),'Next - Confirm')]"));
		eleNextConfirmBtn.click();
		Thread.sleep(4000);
	}

	@Then("I verify personalDetails displayed")
	public void i_verify_personal_details_displayed() {
		WebElement elePersDetails = driver.findElement(By.xpath("//h4[contains(text(),'Personal Details')]"));
		
	}

	@Then("I verify billingaddress displayed")
	public void i_verify_billingaddress_displayed() {
		WebElement eleBillingAddress = driver.findElement(By.xpath("//h4[contains(text(),'Billing Address')]"));
	}

	@When("I click on Confirm")
	public void i_click_on_confirm() {
		WebElement eleConfirmBtn = driver.findElement(By.xpath("//a[contains(text(),'Confirm')]"));
		//WebElement eleConfirmBtn = driver.findElement(By.linkText("Confirm"));
		eleConfirmBtn.click();
	}

	@Then("I should be landed on the Welcome page")
	public void i_should_be_landed_on_the_welcome_page() throws InterruptedException {
		Thread.sleep(2000);
		WebElement eleBillingAddress = driver.findElement(By.xpath("//h1[contains(text(),'Welcome!')]"));
		WebElement eleTextMsg = driver.findElement(By.xpath("//h6[contains(text(),'You can use your email address as username to login!')]"));
	}

	@When("I click on LoginHere")
	public void i_click_on_login_here() {
		//WebElement eleLoginHere = driver.findElement(By.linkText("Login Here"));
		//WebElement eleLoginHere = driver.findElement(By.tagName("[@href='/medicare/login']"));
		WebElement eleLoginHere = driver.findElement(By.xpath("//a[@class='btn btn-lg btn-success']"));
		eleLoginHere.click();
	}
}
