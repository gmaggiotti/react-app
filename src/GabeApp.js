import React from 'react'

//Class component can have state
class Gabe extends React.Component {
    constructor(){
        super();
        this.state = {
            txt_state: "this is the state txt"
        }
    }

    updateTxT(e) {
        this.setState({txt_state: e.target.value})
    }

    render() {
        return <div>
        <h1>Hello Statefull Function Component</h1>
            <h2>Wrapping 2 jsx into a div</h2>
            <b>and adding prop: </b>{this.props.txt}
            <br/>
            <input type="Text" onChange={this.updateTxT.bind(this)} />
            <br/>
            <b>state var: </b> {this.state.txt_state}

        </div>
    }
}

Gabe.protoTypes = {
    // txt: React.protoTypes.string
}

//Stateless function component
/*
const Gabe  = () => <h1>Hello stateless function component</h1>
*/

export default Gabe;
