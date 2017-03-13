import React from 'react';

class App12 extends React.Component {
    constructor() {
        super();
        this.state = {val: 0}
        this.update = this.updateButton.bind(this)
    }
    updateButton(){
        this.setState({val: this.state.val + 1})
    }
    componentWillMount(){
        console.log('componentWillMount')
        this.setState({m: 2})
    }
    render(){
        console.log('render');
        return <button onClick={this.update}>
            {this.state.val * this.state.m}
        </button>
    }
}
export default App12