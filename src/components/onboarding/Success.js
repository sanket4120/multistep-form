import React from 'react';
import { Button } from 'react-bootstrap';

const Success = () => {
  return (
    <div className='mb-5 text-center'>
      <div className='mb-4'>
        <h1 className='display-1 mb-4'>
          <i className='fa-solid fa-circle-check text-primary'></i>
        </h1>

        <h2>Congratulations, Eren!</h2>
        <p className='text-secondary m'>
          You have completed onboarding, you can start using the eden!
        </p>
      </div>

      <div className='onboarding-container'>
        <Button variant='primary' type='button' className='w-100'>
          Launch Eden
        </Button>
      </div>
    </div>
  );
};

export default Success;
