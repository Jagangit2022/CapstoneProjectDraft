@Sanity
Feature: Product search

  Scenario: To perform the Get operation for All products
    Given the base URI is "http://localhost:8080/medicare/json/data/all/products"
    When I perform the Get Operation
    Then Response code should be 200

  Scenario: To perform the Get operation for products in 1st Category
    Given the base URI is "http://localhost:8080/medicare/json/data/category/1/products"
    When I perform the Get Operation
    Then Response code should be 200

  Scenario: To perform the Get operation for Most viewed products
    Given the base URI is "http://localhost:8080/medicare/json/data/mv/products"
    When I perform the Get Operation
    Then Response code should be 200
    
  Scenario: To perform the Get operation for Most purchased products
    Given the base URI is "http://localhost:8080/medicare/json/data/mp/products"
    When I perform the Get Operation
    Then Response code should be 200
    