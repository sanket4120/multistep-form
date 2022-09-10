import { Card } from 'react-bootstrap';

const PlanCard = ({ plan, name, icon, desc }) => {
  return (
    <Card
      style={{ maxWidth: '13rem' }}
      className={plan === name ? 'border-primary' : ''}
    >
      <Card.Body>
        <i className={`${icon} mb-2`}></i>

        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PlanCard;
