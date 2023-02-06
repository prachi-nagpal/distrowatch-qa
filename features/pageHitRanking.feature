@pageHitRanking
Feature: Automate Page Hit Ranking Table

    As a user
    I should be able to validate Page Hit Ranking Table

    Background:
    Given I am on Distrowatch Home page
    And I scroll to PageHitRanking section

    @topFive
    Scenario: Validate the Top Five Entries in Distribution
    When I select "Year 2005" option in Data Span
    And I click on Data Span submit button
    Then I validate top 5 PageHitRanking results  

    @compareHPD
    Scenario: Compare HPD value & indicators
    When I select "Last 6 months" option in Data Span
    And I click on Data Span submit button
    Then I compare HPD values with indicators of PageHitRanking results