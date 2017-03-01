import React from 'react'

//Class component can have state
class Gabe extends React.Component {
    constructor(){
        super();
        this.state = {
            txt_state: "this is the state txt"
            currentEvent:
        }
    }

    updateTxT(e) {
        this.setState({txt_state: e.target.value})
    }

    render() {

        return <div>
            <HeadLine title="Statefull Function Component"/>
            <SecondHeadLine var={this.state.txt_state}/>
            <Widget update={this.updateTxT.bind(this)} />
            <Button>I <Heart/> React</Button>
        </div>
    }
}

const HeadLine = (props) => <h1>Hello {props.title}</h1>
const SecondHeadLine = (props) => <div><h2>Wrapping 2 jsx into a div</h2> <b>and adding prop: </b>{props.var} <br/></div>
const Widget = (props) => <input type="text" onChange={props.update} />
const Button = (props) => <button>{props.children}</button>
const Heart = () => <span>&hearts;</span>

const TextAreaWidget  = () => <textarea>
                                cols="30"
                                rows="10"
                                <h1>{this.state.currentEvent}</h1>
                                </textarea>

HeadLine.propTypes = {
     title: React.PropTypes.string
}

//Stateless function component
/*
const Gabe  = () => <h1>Hello stateless function component</h1>
*/

export default Gabe;
