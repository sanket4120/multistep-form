import React from 'react';
import PlanDetails from './PlanDetails';
import Success from './Success';
import UserDetails from './UserDetails';
import WorkspaceDetails from './WorkspaceDetails';

const OnboardingForm = ({
  onboardingDetails,
  nextStep,
  handleChange,
  submitForm,
}) => {
  switch (onboardingDetails.currentStep) {
    case 1:
      return (
        <UserDetails
          onboardingDetails={onboardingDetails}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <WorkspaceDetails
          onboardingDetails={onboardingDetails}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <PlanDetails
          onboardingDetails={onboardingDetails}
          submitForm={submitForm}
          handleChange={handleChange}
        />
      );
    case 4:
      return <Success />;
    default:
      return (
        <UserDetails
          onboardingDetails={onboardingDetails}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
  }
};

export default OnboardingForm;
