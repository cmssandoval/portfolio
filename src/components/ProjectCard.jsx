import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const ProjectCard = ({ project }) => {
  return (
    <Col md={6} lg={4}>
      <Card className='h-100'>
        <Card.Body className='rounded card-bg'>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          {project.stack.map(( stack, index ) => <Badge bg='secondary' className='me-1' key={index}>{stack}</Badge>)}
        </Card.Body>
        <Card.Footer>
          {project.repositories.map(( repo, index ) => (
            <Button key={index} className='me-3' size='sm' variant='outline-success' target='_blank' href={repo.link}>
              <i className='bi bi-github' /> {repo.name}
            </Button>
          ))}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectCard;