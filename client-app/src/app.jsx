import { useState, useEffect } from "react";
import axios from "axios";
export function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/Activities").then((response) => {
      setActivities(response.data);
    });
  }, []);
  return (
    <>
      <h1>Reactivities</h1>
      {activities.map((activity) => (
        <ul>
          <li key={activity.Id}>{activity.title}</li>
        </ul>
      ))}
    </>
  );
}
