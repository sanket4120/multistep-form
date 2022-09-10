import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const WorkspaceDetails = ({ onboardingDetails, nextStep, handleChange }) => {
  const { workspaceUrl, workspaceName } = onboardingDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <div className='text-center mb-4'>
        <h2>Let's setup a home for all your work</h2>
        <p className='text-secondary'>
          You can always create another workspace later.
        </p>
      </div>

      <Form onSubmit={handleSubmit} className='onboarding-container'>
        <Form.Group className='mb-3'>
          <Form.Label>Workspace Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Eden'
            name='workspaceName'
            value={workspaceName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Label htmlFor='basic-url'>
          Workspace URL <span className='text-secondary'>(optional)</span>
        </Form.Label>
        <InputGroup className='mb-3'>
          <InputGroup.Text className='bg-light'>www.eden.com/</InputGroup.Text>
          <Form.Control
            placeholder='Example'
            name='workspaceUrl'
            value={workspaceUrl}
            onChange={handleChange}
          />
        </InputGroup>

        <Button variant='primary' type='submit' className='w-100 mt-1'>
          Create Workspace
        </Button>
      </Form>
    </>
  );
};

export default WorkspaceDetails;
