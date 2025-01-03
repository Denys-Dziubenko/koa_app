const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

let today;
let actualAnswer;

const isItFriday = (today) => {
    if (today === "Friday") {
        return "TGIF";
    } else {
        return "Nope";
    }
}

Given('today is Sunday', () => {
  today = 'Sunday';
});

Given('today is Friday', () => {
    today = 'Friday';
});

Given('today is {string}', (givenDay) => {
    today = givenDay;
});


When('I ask whether it\'s Friday yet', () => {
  actualAnswer = isItFriday(today);
});

Then('I should be told {string}', (expectedAnswer) => {
  assert.strictEqual(actualAnswer, expectedAnswer);
});