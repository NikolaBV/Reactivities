import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
  return (
    <>
      <Menu inverted={true} fixed="top">
        <Container>
          <Menu.Item header>
            <img
              style={{ marginRight: "1rem" }}
              src="/assets/logo.png"
              alt="logo"
            ></img>
          </Menu.Item>
          <Menu.Item name="Activities" />
          <Menu.Item>
            <Button positive content="Create Activity" />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
}
