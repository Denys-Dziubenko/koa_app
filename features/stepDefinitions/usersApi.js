const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('config');

chai.use(chaiHttp);
const { expect } = chai;

const URL = `${config.server.host}:${config.server.PORT}`;

/** *************** Get All *************** */
Given('I have request with valid {int} and {int}', (limitP, offsetP) => {
    [this.limit, this.offset] = [limitP, offsetP];
});

When('I request all users with given limit and offset', async () => {
    this.response = await chai
        .request(`${URL}`)
        .get(`/api/v1/get-users-list?limit=${this.limit}&offset=${this.offset}`);
});

Then('I should get a list of users with status code {int}', (statusCode) => {
    expect(this.response).to.have.status(statusCode);
    expect(this.response.body).to.be.an('array');
    if (this.response.body.length > 0) {
        expect(this.response.body[0]).to.be.an('object');
        expect(this.response.body[0]).to.have.all.keys('id', 'name', 'country');
        expect(this.response.body[0].id).to.be.an('number');
        expect(this.response.body[0].name).to.be.an('string');
        expect(this.response.body[0].country).to.be.an('string');
    }
});
/** ***************  *************** */

Given('I have request with valid ID {int}', (userId) => {
    this.userId = userId;
});

When('I request a single user by ID', async () => {
    this.response = await chai
        .request(`${URL}`)
        .get(`/api/v1/get-user/${this.userId}`);
});

Then('I should get a response with one user and with status code {int}', (statusCode) => {
    expect(this.response).to.have.status(statusCode);
    expect(this.response.body).to.be.an('object');
    expect(this.response.body).to.have.key('user');
    expect(this.response.body.user).to.have.all.keys('id', 'name', 'country');
    expect(this.response.body.user.id).to.be.an('number');
    expect(this.response.body.user.name).to.be.an('string');
    expect(this.response.body.user.country).to.be.an('string');
});

// Scenario Outline: Get a single user
//     Given I have request with valid ID <userId>
//     When I request a single user by ID
//     Then I should get a response with one user
