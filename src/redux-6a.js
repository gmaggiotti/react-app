import React from 'react';
var Redux = require('redux');

class ReduxApp6 extends React.Component {
    constructor () {
        super();
        this.store = Redux.createStore(this.counter);
        this.updateCounter = this.updateCounter.bind(this)
    }

    counter(state = 0, action)  {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }


    updateCounter(){
        this.store.dispatch({ type: 'INCREMENT' });
        this.setState({count: this.store.getState()})
    }

    render() {
        return (
                <button onClick={this.updateCounter}> {this.store.getState()}</button>
        )

    }

}

export default ReduxApp6