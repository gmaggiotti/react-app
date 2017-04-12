var Redux = require('redux');
var expect = require('expect')
var deepFreeze = require('deep-freeze');
var createSpy = expect.createSpy
var spyOn = expect.spyOn
var isSpy = expect.isSpy

/*
 * Open the console to see
 * that all tests have passed.
 */


const toggleTodo = (todo) => {
    return Object.assign({}, todo, {completed: !todo.completed});
};


const testToggleTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false
    };
    const todoAfter = {
        id: 0,
        text: 'Learn Redux',
        completed: true
    };

    deepFreeze(todoBefore);

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter);
};


testToggleTodo();

console.log('All tests passed.');
