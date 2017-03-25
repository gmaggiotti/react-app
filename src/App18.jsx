import React from 'react';
import './App.css'

class App18 extends React.Component {
    render() {
        return (
            <Parent>
                <div className="childA"/>
                <div className="childA"/>
            </Parent>
        )
    }
}

class Parent extends React.Component {

    render() {
        let mapItems = React.Children.map(this.props.children, child => child);
        let arrayItems = React.Children.toArray(this.props.children)
        let forItems = React.Children.forEach( this.props.children, child => console.log(child))

        return  null
    }
}


export default App18