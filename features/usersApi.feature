Feature: Test users API

    Scenario Outline: Get all users
        Given I have request with valid <limit> and <offset>
        When I request all users with given limit and offset
        Then I should get a list of users with status code <statusCode>

    Examples:
        | limit | offset | statusCode  |
        | 10    | 0      | 200         |
        | 5     | 5      | 200         |

    Scenario Outline: Get a single user
        Given I have request with valid ID <userId>
        When I request a single user by ID
        Then I should get a response with one user and with status code <statusCode>

    Examples:
        | userId | statusCode |
        | 1      | 200  |
        | 2      | 200  |

    # Scenario: Create a user
    #     Given I have a valid token
    #     When I create a user
    #     Then I should get a new user