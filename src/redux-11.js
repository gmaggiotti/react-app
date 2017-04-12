var Redux = require('redux');
var expect = require('expect')
var deepFreeze = require('deep-freeze');
var createSpy = expect.createSpy
var spyOn = expect.spyOn
var isSpy = expect.isSpy

/*
     Open the console
     to see that the tests pass.
*/

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return [
            ...state.slice(0, action.id),
                Object.assign({},state[action.id],{completed: true}) ,
            ...state.slice(action.id + 1)
        ];
        default:
            return state;
    }
};

const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);
    let a = todos(stateBefore, action)
    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};


testAddTodo();
testToggleTodo();
console.log('All tests passed.');