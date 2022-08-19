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
formatter.uri("file:src/test/java/features/Home.feature");
formatter.feature({
  "name": "To verify Categories",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
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
formatter.scenario({
  "name": "To check list of tablets in Antipyretics with Product info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I cick on Antipyretics",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.i_cick_on_antipyretics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify table List",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_verify_table_list()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.scenario({
  "name": "To check list of tablets in Analgesics with Product info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I cick on Analgesics",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.i_cick_on_analgesics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify table List",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_verify_table_list()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.scenario({
  "name": "To check list of tablets in Antibiotics with Product info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on Antibiotics",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.i_click_on_antibiotics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify table List",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_verify_table_list()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/LoginUser.feature");
formatter.feature({
  "name": "User Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To login as a user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I launch the URL",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on homepage Login",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the Login page",
  "keyword": "Then "
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
  "name": "I cick on username",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Logout",
  "keyword": "And "
});
formatter.step({
  "name": "I should be landed on the Login page",
  "keyword": "Then "
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
formatter.scenario({
  "name": "To login as a user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
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
  "name": "I cick on username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_cick_on_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Logout",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_logout()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/RegisterAdmin.feature");
formatter.feature({
  "name": "Admin Registration",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To register as a user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I launch the URL",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on homepage Login",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the Login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click Register Here link",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the SignUp_Personal page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter first name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter contact number \"\u003ccontactNum\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter signup password \"\u003cpassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select role",
  "keyword": "And "
});
formatter.step({
  "name": "I click on NextBilling",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the SignUp_Address page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter address line1 \"\u003caddrLineOne\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter address line2 \"\u003caddrLineTwo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter postal code \"\u003cpostalCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on NextConfirm",
  "keyword": "When "
});
formatter.step({
  "name": "I verify personalDetails displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify billingaddress displayed",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Confirm",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the Welcome page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on LoginHere",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the Login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "contactNum",
        "passWord",
        "confirmPassword",
        "addrLineOne",
        "addrLineTwo",
        "city",
        "postalCode",
        "state",
        "country"
      ]
    },
    {
      "cells": [
        "Jagan",
        "GD",
        "jagan15@testmail.com",
        "9517534682",
        "12345",
        "12345",
        "St Marks Road",
        "Shivajinagar",
        "Bangalore",
        "560045",
        "Karnataka",
        "India"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To register as a user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
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
formatter.step({
  "name": "I click Register Here link",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.i_click_register_here_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the SignUp_Personal page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_should_be_landed_on_the_sign_up_personal_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter first name \"Jagan\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter last name \"GD\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email \"jagan15@testmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter contact number \"9517534682\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_contact_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter signup password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_signup_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_confirm_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select role",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_select_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on NextBilling",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.i_click_on_next_billing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the SignUp_Address page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_should_be_landed_on_the_sign_up_address_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter address line1 \"St Marks Road\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_address_line1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter address line2 \"Shivajinagar\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_address_line2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter city \"Bangalore\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postal code \"560045\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_postal_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter state \"Karnataka\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter country \"India\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on NextConfirm",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.i_click_on_next_confirm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify personalDetails displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_verify_personal_details_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify billingaddress displayed",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_verify_billingaddress_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Confirm",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.i_click_on_confirm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_should_be_landed_on_the_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on LoginHere",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.i_click_on_login_here()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/RegisterUser.feature");
formatter.feature({
  "name": "User Registration",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To register as a user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I launch the URL",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on homepage Login",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the Login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click Register Here link",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the SignUp_Personal page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter first name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter contact number \"\u003ccontactNum\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter signup password \"\u003cpassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on NextBilling",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the SignUp_Address page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter address line1 \"\u003caddrLineOne\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter address line2 \"\u003caddrLineTwo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter postal code \"\u003cpostalCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on NextConfirm",
  "keyword": "When "
});
formatter.step({
  "name": "I verify personalDetails displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify billingaddress displayed",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Confirm",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the Welcome page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on LoginHere",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the Login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "contactNum",
        "passWord",
        "confirmPassword",
        "addrLineOne",
        "addrLineTwo",
        "city",
        "postalCode",
        "state",
        "country"
      ]
    },
    {
      "cells": [
        "Jagan",
        "GD",
        "jagan12@testmail.com",
        "9517534682",
        "12345",
        "12345",
        "St Marks Road",
        "Shivajinagar",
        "Bangalore",
        "560045",
        "Karnataka",
        "India"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To register as a user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
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
formatter.step({
  "name": "I click Register Here link",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.i_click_register_here_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the SignUp_Personal page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_should_be_landed_on_the_sign_up_personal_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter first name \"Jagan\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter last name \"GD\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email \"jagan12@testmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter contact number \"9517534682\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_contact_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter signup password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_signup_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_confirm_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on NextBilling",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.i_click_on_next_billing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the SignUp_Address page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_should_be_landed_on_the_sign_up_address_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter address line1 \"St Marks Road\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_address_line1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter address line2 \"Shivajinagar\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_address_line2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter city \"Bangalore\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postal code \"560045\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_postal_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter state \"Karnataka\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter country \"India\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_enter_country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on NextConfirm",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.i_click_on_next_confirm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify personalDetails displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_verify_personal_details_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify billingaddress displayed",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.i_verify_billingaddress_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Confirm",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.i_click_on_confirm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_should_be_landed_on_the_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on LoginHere",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.i_click_on_login_here()"
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
formatter.after({
  "status": "passed"
});
});