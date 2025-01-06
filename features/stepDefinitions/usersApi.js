const {
    Given,
    When,
    Then,
} = require('@cucumber/cucumber');
const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('config');
const { KEYS_SET } = require('../../app/middlewares/auth');

chai.use(chaiHttp);
const { expect } = chai;

const URL = `${config.server.host}:${config.server.PORT}`;

/** *************** Create Single User With Params *************** */
Given('I have request with valid {string}, {string} params', (name, country) => {
    [this.name, this.country] = [name, country];
});

When('I create a user with given name and country', async () => {
    this.response = await chai
        .request(`${URL}`)
        .post('/api/v1/add-user')
        .send({ name: this.name, country: this.country });
});

Then('I should get a response with created userId and with status code {int}', (statusCode) => {
    expect(this.response).to.have.status(statusCode);
    expect(this.response.body).to.be.an('object');
    expect(this.response.body).to.have.key('id');
    expect(this.response.body.id).to.be.an('number');
});
/** ***************  *************** */

/** *************** Get Single User By ID *************** */
Given('I have request with valid ID', (dataTable) => {
    this.userId = dataTable.rowsHash().userId;
});

When('I request a single user by ID', async () => {
    this.response = await chai
        .request(`${URL}`)
        .get(`/api/v1/get-user/${this.userId}`);
});

Then('I should get a response with one user and with status code 200', (dataTable) => {
    const statusCode = dataTable.rowsHash().statusCode;

    expect(this.response).to.have.status(statusCode);
    expect(this.response.body).to.be.an('object');
    expect(this.response.body).to.have.key('user');
    expect(this.response.body.user).to.have.all.keys('id', 'name', 'country');
    expect(this.response.body.user.id).to.be.an('number');
    expect(this.response.body.user.name).to.be.an('string');
    expect(this.response.body.user.country).to.be.an('string');
});
/** ***************  *************** */

/** *************** Get All Users With Limits *************** */
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

/** *************** Delete Single User By ID *************** */
Given('I have request with valid ID to delete', async () => {
    const response = await chai
        .request(`${URL}`)
        .get('/api/v1/get-users-list?limit=1');
    this.userId = response?.body?.length ? response.body[0].id : 0;
});

When('I delete a single user by ID', async () => {
    const authKey = 'x-auth-key';
    this.response = await chai
        .request(`${URL}`)
        .delete(`/api/v1/dell-user/${this.userId}`)
        // set headers for auth
        .set(authKey, KEYS_SET[authKey]);
});

Then('I should get a response with deleted status and status code 200', (dataTable) => {
    const statusCode = dataTable.rowsHash().statusCode;

    expect(this.response).to.have.status(statusCode);
    expect(this.response.body).to.have.key('deleted');
    expect(this.response.body.deleted).to.be.an('number');
});
/** ***************  *************** */


