import { Button, Form, Segment } from "semantic-ui-react";

export default function ActivityForm() {
  return (
    <Segment clearing>
      <Form>
        <Form.TextArea placeholder="Title"></Form.TextArea>
        <Form.TextArea placeholder="Date"></Form.TextArea>
        <Form.TextArea placeholder="Description"></Form.TextArea>
        <Form.TextArea placeholder="Category"></Form.TextArea>
        <Form.TextArea placeholder="Locatiob"></Form.TextArea>
        <Form.TextArea placeholder="Venue"></Form.TextArea>
        <Button
          floated="right"
          positive
          type="submit"
          content="submit"
        ></Button>
        <Button floated="right" type="button" content="Cancel"></Button>
      </Form>
    </Segment>
  );
}
