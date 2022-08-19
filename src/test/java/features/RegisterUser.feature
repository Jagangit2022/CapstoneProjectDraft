@Sanity

Feature: User Registration

  Scenario Outline: To register as a user
    Given I launch the URL

    When I click on homepage Login
    Then I should be landed on the Login page
    When I click Register Here link
    Then I should be landed on the SignUp_Personal page
    And I enter first name "<firstName>"
    And I enter last name "<lastName>"
    And I enter email "<email>"
    And I enter contact number "<contactNum>"
    And I enter signup password "<passWord>"
    And I enter confirm password "<confirmPassword>"
#    And I select role
    When I click on NextBilling
    Then I should be landed on the SignUp_Address page
    And I enter address line1 "<addrLineOne>"
    And I enter address line2 "<addrLineTwo>"
    And I enter city "<city>"
    And I enter postal code "<postalCode>"
    And I enter state "<state>"
    And I enter country "<country>"
    When I click on NextConfirm
#    Then I should be landed on the Confirmation page
    Then I verify personalDetails displayed
    And I verify billingaddress displayed
    When I click on Confirm
    Then I should be landed on the Welcome page
    When I click on LoginHere
    Then I should be landed on the Login page

    Examples: 
      | firstName | lastName | email             | contactNum | passWord | confirmPassword |addrLineOne|addrLineTwo|city|postalCode|state|country|
      | Jagan     | GD       | jagan13@testmail.com | 9517534682 |12345|12345|St Marks Road|Shivajinagar|Bangalore|560045|Karnataka|India|
