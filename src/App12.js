import React from 'react';
import ReactDOM from 'react-dom'

class App12 extends React.Component {
    constructor() {
        super();
        this.state = {val: 1}
        this.update = this.updateButton.bind(this)
    }
    updateButton(){
        this.setState({val: this.state.val + 1})
    }


    componentWillMount(){
        console.log('componentWillMount')
        this.setState({m: 2})
    }

    componentDidMount(){
        console.log("commponentDidMount")
        console.log(ReactDOM.findDOMNode(this))
        setInterval(this.update,500)
    }

    render(){
        console.log('render');
        return <button onClick={this.update}>
            {this.state.val * this.state.m}
        </button>
    }
}
export default App12