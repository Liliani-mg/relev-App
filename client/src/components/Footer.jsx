import React from "react";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;
