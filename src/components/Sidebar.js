import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  ListGroup,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";
import APIRequest from "../api/APIRequet";

const Sidebar = ({ handleOnProjectClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    new APIRequest()
      .getProjects()
      .then((result) => {
        setProjects(result.payload);
      })
      .catch((error) => {
        setProjects([]);
        setMessage(error.message);
      });
  }, []);

  const handleOnClick = () => setShowModal(true);
  const handleOnHide = () => setShowModal(false);

  // On project submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    new APIRequest()
      .createProject({ name, description })
      .then((result) => {
        setMessage(result.message);
        setProjects([...projects, result.payload]);
        setShowModal(false);
        setName("");
        setDescription("");
      })
      .catch((error) => {
        setMessage(error.message);
        setShowModal(false);
        setName("");
        setDescription("");
      });
  };

  return (
    <>
      <Alert variant="pirmary">{message}</Alert>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Projects</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {projects.map((v) => (
                <ListGroup.Item
                  key={v._id}
                  onClick={() => handleOnProjectClick(v)}
                >
                  {v.name}{" "}
                  <span className="badge">{v.tasks ? v.tasks.length : 0}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button variant="light" onClick={handleOnClick}>
        + Add Project
      </Button>{" "}
      <Modal show={showModal} onHide={handleOnHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Create project
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOnHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Sidebar;
