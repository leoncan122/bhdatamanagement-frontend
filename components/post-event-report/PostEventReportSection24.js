import React from "react";
import DemographicSurveySection from "./DemographicSurveySection";

const PostEventReportSection24 = ({ setEventForm }) => {
  const handleMaxNumber = (e) => {
    let { value } = e.target;
    value > 100 && (e.target.value = 100);
  };
  return (
    <div className="px-7 grid grid-cols-1 gap-7 mt-10">
      <h1 className="font-black">Other Testing</h1>
      <label className="grid md:flex gap-5">
        <p className="md:w-80">What type of health screening was conducted?</p>
        <input
          className="border-black "
          type="text"
          // placeholder="Please specify"
          name="otherTestingType"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <label className="grid md:flex gap-5">
        <p className="md:w-80">Other Testing Agency</p>
        <input
          className="border-black "
          type="text"
          // placeholder="type a number"
          name="otherTestingAgency"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <label className="grid md:flex gap-5">
        <p className="md:w-80">Total tested for Other</p>
        <input
          className="border-black "
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={0}
          onKeyUp={handleMaxNumber}
          // placeholder="type a number"
          name="otherTestedTotal"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <label className="grid md:flex gap-5">
        <p className="md:w-80">Total # Linked to Care</p>
        <input
          className="border-black "
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={0}
          onKeyUp={handleMaxNumber}
          //  placeholder="type a number"
          name="otherLinkedToCare"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <label className="grid md:flex gap-5">
        <p className="md:w-80">Which services were they referred to?</p>
        <input
          className="border-black "
          type="text"
          // placeholder="type a number"
          name="otherServicesReferredTo"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>

      <DemographicSurveySection
        setEventForm={setEventForm}
        typeOfTest="other"
      />
    </div>
  );
};

export default PostEventReportSection24;
