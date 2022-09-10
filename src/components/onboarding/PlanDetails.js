import { Button, Form } from 'react-bootstrap';
import PlanCard from './PlanCard';

const PlanDetails = ({ onboardingDetails, submitForm, handleChange }) => {
  const { plan } = onboardingDetails;
  const plans = [
    {
      name: 'For myself',
      icon: 'fa-solid fa-user',
      desc: 'Write better. Think more clearly. Stay organised.',
    },
    {
      name: 'With my team',
      icon: 'fa-solid fa-users',
      desc: 'Wikis, docs, tasks & projects, all in one place.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <>
      <div className='text-center mb-4'>
        <h2>How are you planning to use Eden?</h2>
        <p className='text-secondary'>
          We'll streamline your setup experience accordingly.
        </p>
      </div>

      <Form onSubmit={handleSubmit} className='onboarding-container'>
        <div className='mb-3 d-flex flex-wrap gap-3 justify-content-center'>
          {plans.map(({ icon, name, desc }) => (
            <Form.Group key={name}>
              <input
                type='radio'
                name='plan'
                id={name}
                value={name}
                onChange={handleChange}
                checked={plan === name}
                className='d-none'
              />
              <label htmlFor={name}>
                <PlanCard plan={plan} icon={icon} name={name} desc={desc} />
              </label>
            </Form.Group>
          ))}
        </div>

        <Button variant='primary' type='submit' className='w-100 mt-1'>
          Create Workspace
        </Button>
      </Form>
    </>
  );
};

export default PlanDetails;
