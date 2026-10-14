import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectCard from '../../components/ProjectCard.jsx';
import projects from '../../data/projects.js';

const Projects = () => {
  return (
    <section id='projects' className='py-4'>
      <Container>
        <h2 className='mb-4'><span className='text-success'>#</span> projects</h2>
        <Row className='g-4'>
          { projects.map(( project, index ) => (
            <ProjectCard project={project} key={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;