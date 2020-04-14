import React, { useState } from 'react';

import './App.css';

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [ courseGoals, setCourseGoals ] = useState([
    {id: "cg1", text: "Finish the course"},
    {id: "cg2", text: "Learn a lot"},
    {id: "cg3", text: "Earn money :v"}
  ]);

  const newGoalHandler = newGoal => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };

  return (
	  <div className="course-goals">
	  	<h2>Course Goals</h2>
      <NewGoal onAddGoal={newGoalHandler} />
      <GoalList goals={courseGoals} />
	  </div>
  );
}

export default App;
