Feature: Test users API

    Scenario: Get all users
        Given I have a valid token
        When I request all users
        Then I should get a list of users

    # Scenario: Get a single user
    #     Given I have a valid token
    #     When I request a single user
    #     Then I should get a single user

    # Scenario: Create a user
    #     Given I have a valid token
    #     When I create a user
    #     Then I should get a new user