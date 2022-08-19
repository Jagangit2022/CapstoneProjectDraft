package stepDefs;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;


import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HomeSteps {
	
	WebDriver driver = BaseClass.driver;

	@When("I cick on Antipyretics")
	public void i_cick_on_antipyretics() {
		WebElement eleAntipyretics = driver.findElement(By.linkText("Antipyretics"));
		eleAntipyretics.click();
	}


	@When("I cick on Analgesics")
	public void i_cick_on_analgesics() {
		WebElement eleAnalgesics = driver.findElement(By.linkText("Analgesics"));
		eleAnalgesics.click();
	}

	@When("I click on Antibiotics")
	public void i_click_on_antibiotics() {
		WebElement eleAntibiotics = driver.findElement(By.linkText("Antibiotics"));
		eleAntibiotics.click();
	}
	
	@Then("I verify table List")
	public void i_verify_table_list() {
		List<WebElement> tableRows = driver.findElements(By.xpath("//table[@id='productListTable']/tbody/tr"));
		System.out.println("Total number of Rows : "+tableRows.size());
		
		List<WebElement> tableColumns = driver.findElements(By.xpath("//table[@id='productListTable']//th"));
		System.out.println("Total number of Columns : "+tableColumns.size());
		
		List<WebElement> tableData = driver.findElements(By.xpath("//table[@id='productListTable']/tbody//td"));
		
		//for(WebElement ele: tableRows) {
			for(WebElement data: tableData) {
				System.out.println(data.getText());
			}
		//}
	}
	
	@When("I click on View Products")
	public void i_click_on_View_Products() {
		WebElement eleViewProducts = driver.findElement(By.xpath("//a[contains(text(),'View Products')]"));
		eleViewProducts.click();
	}

	@Then("I should be landed on All Products page")
	public void i_should_be_landed_on_All_Products_page() {
		WebElement eleAllProducts = driver.findElement(By.xpath("(//*[contains(text(),\"All Products\")])[3]"));
		System.out.println("All Products : " +eleAllProducts.getText());
	}

	@When("I select All Records from Show dropdown")
	public void i_select_All_Records_from_Show_dropdown() throws InterruptedException {
		Select objSelect = new Select(driver.findElement(By.xpath("//Select[@name='productListTable_length']")));
		objSelect.selectByVisibleText("ALL");
		Thread.sleep(3000);
		
	}
	
	
	@When("I check for tablets from the list {string} and Add to Cart")
	public void i_check_for_tablets_from_the_list(String TabList) throws InterruptedException {
		int itemCount=0;
		int colCount;
		int divisor=6;
		int rowVal=0;
		int AddToCartFlag=0;
		String tempArr[] = TabList.split(",");
		int listSize = tempArr.length;
		System.out.println("Temp Array size : " +listSize);

		while(itemCount < listSize) {
			try {
				List<WebElement> tableData = driver.findElements(By.xpath("//table[@id='productListTable']/tbody//td"));
				System.out.println("Item Count : " +itemCount);
				colCount = 0;

				for(WebElement data: tableData) {
					colCount++;
					System.out.println("Row count : " +colCount);
					if(data.getText().equalsIgnoreCase(tempArr[itemCount])) {
						System.out.println(data.getText());
						System.out.println(tempArr[itemCount]);
						AddToCartFlag=1;
					}else {
						if((colCount%divisor) == 0 && AddToCartFlag ==1) {	
							System.out.println("Column Count Value : "+colCount);
							rowVal = colCount/divisor;
							WebElement eleAddToCart = driver.findElement(By.xpath("(//a[@class=\"btn btn-success\"])["+ rowVal +"]"));
							eleAddToCart.click();
							AddToCartFlag=0;
							itemCount++;
							Thread.sleep(2000);
							WebElement eleContShopping = driver.findElement(By.xpath("//a[@class='btn btn-warning']"));
							eleContShopping.click();
							Thread.sleep(2000);
							Select objSelect = new Select(driver.findElement(By.xpath("//Select[@name='productListTable_length']")));
							objSelect.selectByVisibleText("ALL");
						}
					}
				}
				
			}catch(StaleElementReferenceException e) {
				
			}
		}
	}
	
	@Then("I should see total Item count with Value")
	public void i_should_see_total_Item_count_with_Value() throws InterruptedException {
		WebElement eleLoginUser = driver.findElement(By.linkText("Kavita Nigam"));
		eleLoginUser.click();
		WebElement eleCheckOut = driver.findElement(By.xpath("//a[@href='/medicare/cart/show']"));
		String checkOutVal = eleCheckOut.getText();
		System.out.println("Check Out Value : " +checkOutVal);
		Thread.sleep(3000);
	}

	@When("I click on Cart to Review Order")
	public void i_click_on_Cart_to_Review_Order() throws InterruptedException {
		WebElement eleCheckOut = driver.findElement(By.xpath("//a[@href='/medicare/cart/show']"));
		eleCheckOut.click();
		Thread.sleep(3000);
	}
}

