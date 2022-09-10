import { useState } from 'react';
import OnboardingForm from '../../components/onboarding/OnboardingForm';
import Stepper from '../../components/stepper/Stepper';
import './onboarding.css';

const Onboarding = () => {
  const [onboardingDetails, setOnboardingDetails] = useState({
    currentStep: 1,
    stepsCount: 4,
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOnboardingDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });
  };

  const nextStep = () =>
    setOnboardingDetails((prevDetails) => {
      return {
        ...prevDetails,
        currentStep: prevDetails.currentStep + 1,
      };
    });

  const submitForm = () => {
    //submit form details
    nextStep();
  };

  return (
    <div className='container mx-auto min-vh-100 vw-100 pt-5'>
      <div className='mb-5 d-flex align-items-center justify-content-center'>
        <img
          src='/assets/logo.png'
          alt='eden_logo'
          className='onboarding-logo'
        />
        <h3 className='mb-0'>Eden</h3>
      </div>

      <div className='onboarding-container'>
        <Stepper
          stepsCount={onboardingDetails.stepsCount}
          currentStep={onboardingDetails.currentStep}
        />
      </div>

      <div className='my-5'>
        <OnboardingForm
          onboardingDetails={onboardingDetails}
          handleChange={handleChange}
          nextStep={nextStep}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
};

export default Onboarding;
