import React, { Component } from 'react';
import ExerciseItem from './ExerciseItem'

class Exercises extends Component {
  render() {
    let exerciseItem;
    if(this.props.exercises){
      exerciseItem = this.props.exercises.map(exercise =>{
        return(<ExerciseItem key = {exercise.exerciseName} exerciseItem = {exercise} />);
      });
    }
    return (
      <div className="Exercises">
      {exerciseItem}
      </div>
    );
  }
}

export default Exercises;
