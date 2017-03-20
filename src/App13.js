import React from 'react';
import ReactDOM from 'react-dom'

class App13 extends React.Component {

    constructor() {
        super();
        this.state = {increasing: false}
        this.update = this.updateButton.bind(this)
    }
    updateButton(){
        ReactDOM.render(<App13 val={this.props.val + 1} />,
        document.getElementById('root'))

    }

    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val })
    }

    //this method prevents re-render till return TRUE
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val %5 === 0;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`componentDidUpdate: ${prevProps.val}`)
    }

    render(){
        console.log('render');
        console.log(this.state.increasing)
        return <button onClick={this.update.bind(this)}>
            {this.props.val || "a" }
        </button>
    }
}

App13.defaultProps = {val: 1}

export default App13