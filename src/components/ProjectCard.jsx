import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const ProjectCard = ({ project }) => {
  return (
    <Col md={6} lg={4}>
      <Card className='h-100'>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          {project.stack.map(stack => <Badge bg='secondary' className='me-1' key={stack}>{stack}</Badge>)}
        </Card.Body>
        <Card.Footer>
          <Button size='sm' variant='outline-success' href={project.repo}>
            <i className='bi bi-github' /> repo
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectCard;