import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { ChangeEvent, useState } from "react";

interface Props {
  closeForm: () => void;
  activity: Activity | undefined;
  createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
}: Props) {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    date: "",
    description: "",
    category: "",
    location: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    createOrEdit(activity);
  }
  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autocomplete="off">
        <Form.TextArea
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        ></Form.TextArea>
        <Form.TextArea
          placeholder="Date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        ></Form.TextArea>
        <Form.TextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        ></Form.TextArea>
        <Form.TextArea
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        ></Form.TextArea>
        <Form.TextArea
          placeholder="Location"
          value={activity.location}
          name="location"
          onChange={handleInputChange}
        ></Form.TextArea>
        <Form.TextArea
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        ></Form.TextArea>
        <Button
          floated="right"
          positive
          type="submit"
          content="submit"
        ></Button>
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="Cancel"
        ></Button>
      </Form>
    </Segment>
  );
}
