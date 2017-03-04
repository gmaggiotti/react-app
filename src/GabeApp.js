import React from 'react'
import ReactDOM from 'react-dom'

//Class component can have state
class Gabe extends React.Component {
    constructor(){
        super();
        this.state = {
            txt_state: "this is the state txt",
            currentEvent: "----",
            a:  ""
        }
        this.update = this.updateOnEvent.bind(this)
    }

    updateTxT(e) {
        this.setState({txt_state: e.target.value})
    }

    updateOnEvent(e) {
        this.setState({
            currentEvent: e.type,
            a: ReactDOM.findDOMNode(this.a).value
        })
    }

    unmount(){
        console.log("unmount")
    }

    //this fires only onces before render
    componentWillMount(){
        console.log("component will mount")
    }

    //this fires only onces after render
    componentDidMount(){
        console.log("component did mount")
    }

    render() {
        console.log("render")
        return <div>
            <Input ref={ component => this.a = component}
                   update={this.update}
                   />
            <h1>a:{this.state.a}</h1>
            <HeadLine title="Statefull Function Component"/>
            <SecondHeadLine var={this.state.txt_state}/>
            <Widget update={this.update} />
            <Button unmount={this.unmount.bind(this)}>I <Heart/> React so I unmount h1</Button>
            <TextAreaWidget ue={this.update}/>
                <h1>{this.state.currentEvent}</h1>
        </div>
    }
}

class Input extends React.Component {
    render(props) {
        return <input type="text" onChange={this.props.update} />
    }
}


const HeadLine = (props) => <h1>Hello {props.title}</h1>
const SecondHeadLine = (props) => <div><h2>Wrapping 2 jsx into a div</h2> <b>and adding prop: </b>{props.var} <br/></div>
const Widget = (props) => <input type="text" onChange={props.update} />
const Button = (props) => <button onClick={props.unmount}>{props.children}</button>
const Heart = () => <span>&hearts;</span>

const TextAreaWidget  = (props) => <textarea
                                onKeyPress={props.ue}
                                onCopy={props.ue}
                                cols="30"
                                rows="10" />


HeadLine.propTypes = {
     title: React.PropTypes.string
}

//Stateless function component
/*
const Gabe  = () => <h1>Hello stateless function component</h1>
*/



export default Gabe;
