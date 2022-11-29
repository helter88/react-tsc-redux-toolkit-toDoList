import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { toDoActions } from "./store/todoSlice";
import { RootState } from "./store/store";

function App() {
  const [activity, setActivity] = useState("");
  const dispatch = useDispatch();
  const activityList = useSelector((state: RootState) => state.activityList);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActivity(e.target.value);
  };

  const addActivity = () => {
    dispatch(toDoActions.add(activity));
    setActivity("");
  };

  const displayActivities = activityList?.map((item) => {
    return (
      <li key={Math.random()} onClick={() => delateHandler(item)}>
        {item}
      </li>
    );
  });

  const delateHandler = (el: string) => {
    dispatch(toDoActions.remove(el));
  };

  return (
    <div className="App">
      <h1>Your list of activities:</h1>
      <input
        value={activity}
        onChange={inputHandler}
        placeholder="Enter your activity"
      ></input>
      <button onClick={addActivity}>Add</button>
      <ul>{displayActivities}</ul>
    </div>
  );
}

export default App;
