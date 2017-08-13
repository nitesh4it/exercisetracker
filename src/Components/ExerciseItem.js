import React, { Component } from 'react';

class ExerciseItem extends Component {
  render() {
    return (
      <li className="ExerciseItem">
        <strong>{this.props.exerciseItem.exerciseName}</strong> - {this.props.exerciseItem.day}
      </li>
    );
  }
}

export default ExerciseItem;
