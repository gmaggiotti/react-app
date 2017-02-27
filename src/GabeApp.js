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
            <HeadLine/>
            <SecondHeadLine var={this.state.txt_state}/>
            <Widget update={this.updateTxT.bind(this)} />
        </div>
    }
}

const HeadLine = () => <h1>Hello Statefull Function Component</h1>
const SecondHeadLine = (prop) => <div><h2>Wrapping 2 jsx into a div</h2> <b>and adding prop: </b>{prop.var} <br/></div>

const Widget = (props) => <input type="text" onChange={props.update} />

Gabe.protoTypes = {
    // txt: React.protoTypes.string
}

//Stateless function component
/*
const Gabe  = () => <h1>Hello stateless function component</h1>
*/

export default Gabe;
