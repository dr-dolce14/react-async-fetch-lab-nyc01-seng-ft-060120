// create your App component here
import React, { Component } from 'react'
 
class App extends Component {
 
  state = {
    peopleInSpace: []
  }
 
  render() {
      console.log(this.state)
    return (
      <div>
          <h1>People in Space!</h1>
        {this.state.peopleInSpace.map(person => <li>{person.name}, location: {person.craft}</li>)}
      </div>
    )
  }
 
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
}
 
export default App