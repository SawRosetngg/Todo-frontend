import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

const Contents = ({ tasks, project }) => {
  return project ? (
    <div>
      <h1>{project.name}</h1>
      <ListGroup variant="flush">
        {tasks.map((t) => (
          <ListGroup.Item>
            {t.name}
            <br />
            <Badge bg="primary">{t.dueTime}</Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  ) : null;
};

export default Contents;
