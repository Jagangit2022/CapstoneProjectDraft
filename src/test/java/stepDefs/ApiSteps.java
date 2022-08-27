package stepDefs;



import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class ApiSteps {
	
	Response response;
	RequestSpecification request;
	
	@Given("the base URI is {string}")
	public void the_base_URI_is(String URI){
		request = RestAssured.given().baseUri(URI);
		
	}

	@When("I perform the Get Operation")
	public void i_perform_the_Get_Operation() {
		response = request.get();
	}
	
	@Then("Response code should be {int}")
	public void response_code_should_be(int ResponseCode) {
		Assert.assertEquals(response.statusCode(), ResponseCode);
	}
}
