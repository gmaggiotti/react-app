import React from 'react';

const HOC = (InnerComponent) => class extends React.Component {
    constructor () {
        super();
        this.state = {count: 0}
        this.updateCounter = this.updateCounter.bind(this)
    }

    updateCounter(){
        console.log("update counter")
        this.setState({count: this.state.count + 1})
    }

    render() {
        return <InnerComponent {...this.props}
                               {...this.state}
                               update={this.updateCounter}/>
    }

    componentWillMount() {
        console.log("HOC will mount")
    }
}


class App15 extends React.Component {
    render(){
        return (
            <div>
                <ButtonHOC>button</ButtonHOC>
                <hr/>
                <LabelHOC>label</LabelHOC>
            </div>
        )
    }
}

const ButtonHOC = HOC(props => <button onClick={props.update}>{props.children} - {props.count}</button>)


class Label extends React.Component {

    render(){
        return (
            <label onMouseMove={this.props.update}>
                {this.props.children}
                {this.props.count}
            </label>
        )
    }
    componentWillMount() {
        console.log("Label will mount")
    }

}

const LabelHOC = HOC(Label)

export default App15