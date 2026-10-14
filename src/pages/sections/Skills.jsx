import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { skills } from '../../data/skills.js';
import SkillCard from '../../components/SkillCard.jsx';

const Skills = () => {
  return (
    <section id='skills' className='py-4'>
      <Container>
        <h2 className='mb-4'><span className='text-success'>#</span> skills</h2>
        <Row className='g-4'>
          { skills.map( group => (
           <SkillCard group={ group } key={ group.id } />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;