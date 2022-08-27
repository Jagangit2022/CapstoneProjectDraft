@Sanity
Feature: End to End test flow

  Background: Launch the application
    Given I launch the URL
    When I click on homepage Login
    Then I should be landed on the Login page

  Scenario Outline: To verify End to End test functionality  by searching elements from table list
    When I enter username "<userName>"
    And I enter password "<passWord>"
    When I click on Login
    Then I should be landed on the Home page
    When I click on View Products
    Then I should be landed on All Products page
    When I select All Records from Show dropdown
    When I check for tablets from the list "Paracetamol,Aceclofenac,Ciprofloxacin,Aceclofenac" and Add to Cart
    Then I should see total Item count with Value
    When I click on Cart to Review Order
    And I click on Checkout
    Then I should be landed on Select Shipping Address page
    When I click on select
    Then I should be landed on Final Payment page
    And I enter Card Number
    And I enter Expiry Month
    And I enter Expiry Year
    And I enter CV code
    When I click on Pay
    Then I should be landed on Your Order is Confirmed page
    And I verify Billed To address
    And I verify Shipped To address
    And I verify Payment Method
    And I verify Order Date
    And I verify Order Summary
    When I click on Continue Shopping

    Examples: 
      | userName     | passWord |
      | kn@gmail.com |    12345 |

	@Sanity
  Scenario Outline: To verify End to End test functionality  by searching elements from table list
    When I enter username "<userName>"
    And I enter password "<passWord>"
    When I click on Login
    Then I should be landed on the Home page
    When I click on View Products
    Then I should be landed on All Products page
    #When I select All Records from Show dropdown
    When I check for tablets from the list using search "Paracetamol,Aceclofenac,Ciprofloxacin,Aceclofenac" and Add to Cart
    Then I should see total Item count with Value
    When I click on Cart to Review Order
    And I click on Checkout
    Then I should be landed on Select Shipping Address page
    When I click on select
    Then I should be landed on Final Payment page
    And I enter Card Number
    And I enter Expiry Month
    And I enter Expiry Year
    And I enter CV code
    When I click on Pay
    Then I should be landed on Your Order is Confirmed page
    And I verify Billed To address
    And I verify Shipped To address
    And I verify Payment Method
    And I verify Order Date
    And I verify Order Summary
    When I click on Continue Shopping

    Examples: 
      | userName     | passWord |
      | kn@gmail.com |    12345 |
