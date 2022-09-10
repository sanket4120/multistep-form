import './stepper.css';

const Stepper = ({ stepsCount, currentStep }) => {
  const progress = currentStep * (100 / stepsCount);

  const progressStyle = {
    width: progress + '%',
  };

  return (
    <div className='stepper position-relative'>
      <ul className='list-unstyled d-flex justify-content-between'>
        {[...Array(stepsCount)].map((step, index) => (
          <li
            className={`d-flex align-items-center justify-content-center rounded-circle  ${
              currentStep >= index + 1
                ? 'bg-primary text-white'
                : 'bg-white border'
            }`}
            key={index}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <span className='stepper-progress-line'>
        <span
          className='stepper-progress bg-primary'
          style={progressStyle}
        ></span>
      </span>
    </div>
  );
};

export default Stepper;
