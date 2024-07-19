import { Segment, Item, Button, Label } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { SyntheticEvent, useState } from "react";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: Props) {
  const [target, setTarget] = useState("");
  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }
  return (
    <>
      <Segment>
        <Item.Group divided>
          {activities.map((activity) => (
            <Item key={activity.id}>
              <Item.Content>
                <Item.Header as="a">{activity.title}</Item.Header>
                <Item.Meta>{activity.date}</Item.Meta>
                <Item.Description>
                  <div>{activity.description}</div>
                  <div>
                    {activity.location}, {activity.venue}
                  </div>
                </Item.Description>
                <Item.Extra>
                  <Button
                    floated="right"
                    content="View"
                    color="blue"
                    onClick={() => selectActivity(activity.id)}
                  ></Button>
                  <Button
                    name={activity.id}
                    floated="right"
                    content="Delete"
                    color="red"
                    loading={submitting && target === activity.id}
                    onClick={(e) => handleActivityDelete(e, activity.id)}
                  ></Button>

                  <Label basic content={activity.category}></Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
          ;
        </Item.Group>
      </Segment>
    </>
  );
}
