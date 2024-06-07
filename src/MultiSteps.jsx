import react, { useState } from "react";

import ProgressBar from "./Progress";

function MultiSteps() {
  const [steps, setSteps] = useState(1);
  const totalSteps = 3;

  function handlePrev() {
    if (steps > 1) {
      setSteps((step) => step - 1);
    }
  }

  function handleNext() {
    if (steps < 3) {
      setSteps((step) => step + 1);
    }
  }

  const stepRenders = () => {
    switch (steps) {
      case 1:
        return <div>Form 1</div>;
      case 2:
        return <div>Form 2</div>;
      case 3:
        return <div>Submit</div>;
      default:
        break;
    }
  };

  return (
    <>
      <div className="container">
        <div className="progress_container">
          <ProgressBar
            steps={steps}
            totalSteps={totalSteps}
            className="progress active"
          />
          {/*ets..*/}
        </div>

        <div className="component-step">{stepRenders()}</div>

        <div className="btns">
          <button
            className={`${steps <= 1 ? " disabled" : "btn"}`}
            onClick={handlePrev}
          >
            prev
          </button>
          <button
            className={`${steps === totalSteps ? "disabled" : "btn"}`}
            onClick={handleNext}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default MultiSteps;
