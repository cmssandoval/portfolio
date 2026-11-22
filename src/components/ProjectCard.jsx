import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const ProjectCard = ({ project }) => {
  return (
    <Col md={6} lg={4}>
      <Card className='h-100'>
        <Card.Body className='rounded card-bg'>
          <Card.Title as={'h3'} className='fw-bold'>{project.title}</Card.Title>
          <Card.Img className='rounded my-2 card-img-top' src={project.image} />
          <Card.Text className='mt-2'>{project.description}</Card.Text>
          {project.stack.map(( stack, index ) => <Badge bg='secondary' className='me-1' key={index}>{stack}</Badge>)}
        </Card.Body>
        <Card.Footer>
            <Button className='me-3 nav-buttons' size='sm' variant='outline-info' target='_blank' rel='noopener noreferrer' href={project.demoUrl}>
              <i className='bi bi-github' /> Demo
            </Button>
            <Button className='me-3 nav-buttons' size='sm' variant='outline-success' target='_blank' rel='noopener noreferrer' href={project.repositoryUrl}>
              <i className='bi bi-github' /> Repo
            </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectCard;