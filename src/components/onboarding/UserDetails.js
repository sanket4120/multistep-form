import { Button, Form } from 'react-bootstrap';

const UserDetails = ({ onboardingDetails, nextStep, handleChange }) => {
  const { fullName, displayName } = onboardingDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <div className='text-center mb-4'>
        <h2>Welcome! First things first...</h2>
        <p className='text-secondary'>You can always change them later.</p>
      </div>

      <Form onSubmit={handleSubmit} className='onboarding-container'>
        <Form.Group className='mb-3'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Steve Jobs'
            name='fullName'
            value={fullName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Steve'
            name='displayName'
            value={displayName}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='w-100 mt-1'>
          Create Workspace
        </Button>
      </Form>
    </>
  );
};

export default UserDetails;
