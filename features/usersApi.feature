Feature: Test users API

    Scenario Outline: Get all users
        Given I have request with valid <limit> and <offset>
        When I request all users with given limit and offset
        Then I should get a array of users

    Examples:
        | limit          | offset |
        | 5              | 0   |

    # Scenario: Get a single user
    #     Given I have a valid token
    #     When I request a single user
    #     Then I should get a single user

    # Scenario: Create a user
    #     Given I have a valid token
    #     When I create a user
    #     Then I should get a new user