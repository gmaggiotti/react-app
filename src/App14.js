import React from 'react';

class App14 extends React.Component {

    constructor() {
        super();
        this.state = {items: []}
        this.filter = this.filter.bind(this)
    }

    componentWillMount() {
        fetch( 'http://swapi.co/api/people/?format=json' )
            .then( response => {
                return response.json()
            })
            .then( ({results: items}) => {this.setState({items})})
    }

    filter(e){
        this.setState({filter: e.target.value})
    }

    render(){
     let items = this.state.items
        if(this.state.filter) {
            items = items.filter(item =>
                item.name.toLowerCase()
                    .includes(this.state.filter.toLowerCase()))
        }

        return (
            <div>
                <input type="text" onChange={this.filter}/>
                {items.map(item => <Person key={item.name} person={item} />)}
            </div>
        )
    }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default App14