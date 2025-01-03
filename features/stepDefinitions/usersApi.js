const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('config');

chai.use(chaiHttp);

const URL = `${config.server.host}:${config.server.PORT}`;

// let limit;
// let offset;
// let response;

Given('I have request with valid {int} and {int}', (limitP, offsetP) => {
    [this.limit, this.offset] = [limitP, offsetP];
});

When('I request all users with given limit and offset', async () => {
    this.response = await chai
        .request(`${URL}`)
        .get(`/api/v1/get-users-list?limit=${this.limit}&offset=${this.offset}`);
    
        console.log(this.response.body);
});

Then('Then I should get a array of users', () => {
    console.log(this.response.body);
    assert.strictEqual(this.response.status, 200);
    // assert.strictEqual(this.response.body.length, this.users.length);
});
