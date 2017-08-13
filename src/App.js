import React, { Component } from 'react';
import Exercises from './Components/Exercises';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      exercises: []
  }
}

componentWillMount(){
  // Initial setup of data is done here
  // May also be used to get the service call to get the initial data
  this.setState({exercises: [
    {
      exerciseName: 'Chest',
      category: 'Upper Body',
      day: 'Monday'
    },
    {
      exerciseName: 'Triceps',
      category: 'Upper Body',
      day: 'Monday'
    },
    {
      exerciseName: 'Back',
      category: 'Upper Body',
      day: 'Tuesday'
    },
    {
      exerciseName: 'Biceps',
      category: 'Upper Body',
      day: 'Tuesday'
    },
    {
      exerciseName: 'Shoulder',
      category: 'Upper Body',
      day: 'Wednesday'
    },
    {
      exerciseName: 'Traps',
      category: 'Upper Body',
      day: 'Thursday'
    },
    {
      exerciseName: 'Cardio and Abs',
      category: 'Both',
      day: 'Wednesday'
    },
    {
      exerciseName: 'Legs',
      category: 'Lower Body',
      day: 'Friday'
    }
  ]});
}
  render() {
    return (
      <div className="App">
      My Exercise tracker App
      <Exercises exercises = {this.state.exercises}/>
      </div>
    );
  }

}

export default App;
