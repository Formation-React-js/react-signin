import React from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import { withCurrentUser } from '../state/current-user';

const Article = ({ title, content, date, author, currentUser }) => {
  return (
    <article className="mb-4">
      <Card>
        <Card.Header as="h3">{title}</Card.Header>
        <Card.Body>
          <Card.Text>{content}</Card.Text>
          <ButtonGroup>
            <Button variant="primary">Lire</Button>
            {currentUser && currentUser.username === author &&
              <Button variant="secondary">Modifier</Button>
            }
          </ButtonGroup>
        </Card.Body>
        <Card.Footer>
          <small>Publié le {date.toLocaleDateString()} par {author}</small>
        </Card.Footer>
      </Card>
    </article>
  );
}

export default withCurrentUser(Article);
