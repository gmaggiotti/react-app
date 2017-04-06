//Reducer is a function that takes  state and action as argument and returns next state of the app
let state ={
    todos: [{
        text: 'Eat food',
        completed: true
    }, {
        text: 'Exercise',
        completed: false
    }],
    visibilityFilter: 'SHOW_COMPLETED'
}

let addItemAction = { type: 'ADD_TODO', text: 'GAbe' }


function visibilityFilter(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter;
    } else {
        return state;
    }
}

//Reducer
function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{ text: action.text, completed: false }]);
        case 'TOGGLE_TODO':
            return state.map((todo, index) =>
                action.index === index ?
                    { text: todo.text, completed: !todo.completed } :
                    todo
            )
        default:
            return state;
    }
}



function todoApp(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
}

var result = state;
for(let i=0; i<5; i++)
    result = todoApp(result,{ type: 'ADD_TODO', text: 'GAbe'+i })
console.log(result.todos)