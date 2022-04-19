import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import {toDoActions} from './store/todoSlice'

function App() {
  const [activity, setActivity] = useState('');
  const dispatch = useDispatch();

  const inputHandler= (e:React.ChangeEvent<HTMLInputElement>) =>{
    setActivity(e.target.value)
  }

  const addActivity = () => {
    dispatch(toDoActions.add(activity))
  }

  return (
    <div className="App">
      <h1>Your list of activities:</h1>
      <input value={activity} onChange={inputHandler} placeholder='Enter your activity'></input>
      <button onClick={addActivity}>Add</button>
    </div>
  );
}

export default App;
