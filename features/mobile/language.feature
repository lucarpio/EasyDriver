@run @mobile
Feature: Multiple language support

    @language @english
    Scenario: Detect and set language - English

        Given I access the app main page
        When I click on settings
        Then I validate the app is set to English

    @language @english
    Scenario: Change the app language to Spanish

        Given I access the app main page
        When I click on settings
        And I select Spanish language
        Then I validate the app is set to Spanish

    @language @spanish
    Scenario: Change the app language to English

        Given I access the app main page
        When I click on settings
        And I select English language
        Then I validate the app is set to English

    @language @spanish
    Scenario: Detect and set language - Spanish

        Given I access the app main page
        When I click on settings
        Then I validate the app is set to Spanish


