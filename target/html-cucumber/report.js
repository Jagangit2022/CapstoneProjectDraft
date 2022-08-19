$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/EndToEnd.feature");
formatter.feature({
  "name": "End to End test flow",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To verify End to End test functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password \"\u003cpassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Login",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the Home page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on View Products",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on All Products page",
  "keyword": "Then "
});
formatter.step({
  "name": "I select All Records from Show dropdown",
  "keyword": "When "
});
formatter.step({
  "name": "I check for tablets from the list \"Paracetamol,Aceclofenac,Ciprofloxacin,Aceclofenac\" and Add to Cart",
  "keyword": "When "
});
formatter.step({
  "name": "I should see total Item count with Value",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Cart to Review Order",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Checkout",
  "keyword": "And "
});
formatter.step({
  "name": "I should be landed on Select Shipping Address page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on select",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on Final Payment page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter Card Number",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Expiry Month",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Expiry Year",
  "keyword": "And "
});
formatter.step({
  "name": "I enter CV code",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Pay",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on Your Order is Confirmed page",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify Billed To address",
  "keyword": "And "
});
formatter.step({
  "name": "I verify Shipped To address",
  "keyword": "And "
});
formatter.step({
  "name": "I verify Payment Method",
  "keyword": "And "
});
formatter.step({
  "name": "I verify Order Date",
  "keyword": "And "
});
formatter.step({
  "name": "I verify Order Summary",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Continue Shopping",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "passWord"
      ]
    },
    {
      "cells": [
        "kn@gmail.com",
        "12345"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_launch_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on homepage Login",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_homepage_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify End to End test functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username \"kn@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on View Products",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.i_click_on_View_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on All Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_should_be_landed_on_All_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select All Records from Show dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.i_select_All_Records_from_Show_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for tablets from the list \"Paracetamol,Aceclofenac,Ciprofloxacin,Aceclofenac\" and Add to Cart",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.i_check_for_tablets_from_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see total Item count with Value",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_should_see_total_Item_count_with_Value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Cart to Review Order",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.i_click_on_Cart_to_Review_Order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Checkout",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.i_click_on_Checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on Select Shipping Address page",
  "keyword": "Then "
});
formatter.match({
  "location": "ShippingAddrSteps.i_should_be_landed_on_Select_Shipping_Address_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on select",
  "keyword": "When "
});
formatter.match({
  "location": "ShippingAddrSteps.i_click_on_select()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on Final Payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "FinalPaymentSteps.i_should_be_landed_on_Final_Payment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Card Number",
  "keyword": "And "
});
formatter.match({
  "location": "FinalPaymentSteps.i_enter_Card_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Expiry Month",
  "keyword": "And "
});
formatter.match({
  "location": "FinalPaymentSteps.i_enter_Expiry_Month()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Expiry Year",
  "keyword": "And "
});
formatter.match({
  "location": "FinalPaymentSteps.i_enter_Expiry_Year()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter CV code",
  "keyword": "And "
});
formatter.match({
  "location": "FinalPaymentSteps.i_enter_CV_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Pay",
  "keyword": "When "
});
formatter.match({
  "location": "FinalPaymentSteps.i_click_on_Pay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on Your Order is Confirmed page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderConfSteps.i_should_be_landed_on_Your_Order_is_Confirmed_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Billed To address",
  "keyword": "And "
});
formatter.match({
  "location": "OrderConfSteps.i_verify_Billed_To_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Shipped To address",
  "keyword": "And "
});
formatter.match({
  "location": "OrderConfSteps.i_verify_Shipped_To_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Payment Method",
  "keyword": "And "
});
formatter.match({
  "location": "OrderConfSteps.i_verify_Payment_Method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Order Date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderConfSteps.i_verify_Order_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Order Summary",
  "keyword": "And "
});
formatter.match({
  "location": "OrderConfSteps.i_verify_Order_Summary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Continue Shopping",
  "keyword": "When "
});
formatter.match({
  "location": "OrderConfSteps.i_click_on_Continue_Shopping()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});