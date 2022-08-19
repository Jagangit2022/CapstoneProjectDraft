@Sanity

Feature: To verify Categories

	Background: Launch the application
    Given I launch the URL

	#@Sanity
  Scenario: To check list of tablets in Antipyretics with Product info
 #   Given I launch the URL
    When I cick on Antipyretics
    Then I verify table List

  Scenario: To check list of tablets in Analgesics with Product info
 #   Given I launch the URL
    When I cick on Analgesics
    Then I verify table List

  Scenario: To check list of tablets in Antibiotics with Product info
 #   Given I launch the URL
    When I click on Antibiotics
    Then I verify table List
