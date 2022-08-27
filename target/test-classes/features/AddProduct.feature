Feature: Add Product

  Background: Launch the application
    Given I launch the URL
    When I click on homepage Login
    Then I should be landed on the Login page

  Scenario Outline: To verify adding new product
    When I enter username "<userName>"
    And I enter password "<passWord>"
    When I click on Login
    Then I should be landed on the Admin Home page
    When I click on Manage Product
    Then I should be landed on Product Management page
    And I enter Product name
    And I enter Brand name
    And I enter Description
    And I enter Unit price
    And I enter Quantity
    When I upload a file
    And I choose Category
    When I click on Save

    Examples: 
      | userName     | passWord |
      | vk@gmail.com | admin    |
