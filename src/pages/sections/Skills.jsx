import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { skills } from '../../data/skills.js';

const Skills = () => {
  return (
    <section id='skills' className='py-4'>
      <Container>
        <h2 className='mb-4'><span className='text-success'>#</span> skills</h2>
        <Row className='g-4'>
          { skills.map( group => (
            <Col md={4} key={ group.category }>
              <h3 className='h6 text-success'>$ ls { group.category }/</h3>
              <div className='d-flex flex-wrap gap-2'>
                { group.items.map( item => <Badge bg='secondary' key={item}>{item}</Badge>)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;