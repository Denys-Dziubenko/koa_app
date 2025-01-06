Feature: Test users API

    Scenario Outline: Get all users
        Given I have request with valid <limit> and <offset>
        When I request all users with given limit and offset
        Then I should get a list of users with status code <statusCode>

    Examples:
        | limit | offset | statusCode  |
        | 1     | 0      | 200         |
        | 1     | 1      | 200         |

    Scenario Outline: Get a single user
        Given I have request with valid ID
            | Fields | Values |
            | userId | 1    |
        When I request a single user by ID
        Then I should get a response with one user and with status code 200
            | Fields     | Values |
            | statusCode | 200    |

    Scenario Outline: Create single user with params
        Given I have request with valid "<name>", "<country>" params
        When I create a user with given name and country
        Then I should get a response with created userId and with status code <statusCode>

    Examples:
        | name | country | statusCode |
        | John | USA     | 201        |
        | Jane | UK      | 201        |

    Scenario Outline: Delete single user
        Given I have request with valid ID to delete
        When I delete a single user by ID
        Then I should get a response with deleted status and status code 200
            | Fields     | Values |
            | statusCode | 200    |
