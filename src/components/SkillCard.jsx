import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const SkillCard = ({ group }) => {
  return (
    <Col md={6} lg={4}>
      <Card className='h-100'>
        <Card.Body className='rounded card-bg'>
          <Card.Title className='m-0 text-success'>{group.category}</Card.Title>
        </Card.Body>
        <Card.Footer className='py-3 d-flex  flex-grow-1 flex-wrap align-items-start gap-2'>
          {group.items.map(item => <Badge bg='secondary' key={item}>{item}</Badge>)}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SkillCard;