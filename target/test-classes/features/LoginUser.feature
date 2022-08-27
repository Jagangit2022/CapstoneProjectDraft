@Sanity
Feature: User Login

  Scenario Outline: To login as a user
    Given I launch the URL
    When I click on homepage Login
    Then I should be landed on the Login page
    When I enter username "<userName>"
    And I enter password "<passWord>"
    When I click on Login
    Then I should be landed on the Home page
    When I cick on username
    And I click on Logout
    Then I should be landed on the Login page

    Examples: 
      | userName     | passWord |
      | kn@gmail.com |    12345 |
