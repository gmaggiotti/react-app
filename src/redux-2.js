//import expect, { createSpy, spyOn, isSpy } from 'expect'
var expect = require('expect')
var createSpy = expect.createSpy
var spyOn = expect.spyOn
var isSpy = expect.isSpy
//Reducer

const counter = (state = 0 , action) => {

    switch (action.type) {
        case 'INCREMENT':
            return ++state;
        case 'DECREMENT':
            return --state;
        default:
            return state;
    }
}

var result = expect(
    counter(0, {type: "INCREMENT"})
).toEqual(1);

var result = expect(
    counter(1, {type: "INCREMENT"})
).toEqual(2);

var result = expect(
    counter(1, {type: "DECREMENT"})
).toEqual(0);

var result = expect(
    counter(1, {type: "SOMETHING"})
).toEqual(1);

var result = expect(
    counter(undefined, {})
).toEqual(0);

