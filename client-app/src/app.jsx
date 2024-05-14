import { useState, useEffect } from "react";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";

export function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/Activities").then((response) => {
      setActivities(response.data);
    });
  }, []);
  return (
    <>
      <Header as="h2">
        <Icon name="users"></Icon>
        Reactivites
      </Header>
      {activities.map((activity) => (
        <List>
          <List.item key={activity.Id}>{activity.title}</List.item>
        </List>
      ))}
    </>
  );
}
