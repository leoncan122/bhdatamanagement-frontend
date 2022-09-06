import React from "react";

export const ParticipantSurveySection12 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value })
  }
  return (
    <div className="p-5 py-10">
      <h2 className="font-black mb-7">
        Some people have made the following statements about their food
        situation. Please answer whether the statements were OFTEN, SOMETIMES,
        or NEVER true for you and your household in the last 12 months.
      </h2>
      <h2 className="font-black">
        <span className="">12</span>  Within the past 12 months, you worried that your food would run out before you got money to buy more.
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
      <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" id={1} value="Often true" name="participantFoodInsecurity1" onChange={handleForm}/>
          <p className="">Often true  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" id={2} value="Sometimes true" name="participantFoodInsecurity1" onChange={handleForm}/>
          <p className="">Sometimes true  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" id={3} value="Never true" name="participantFoodInsecurity1" onChange={handleForm}/>
          <p className="">Never true  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" id={4} value="Decline to answer" name="participantFoodInsecurity1" onChange={handleForm}/>
          <p className="">Decline to answer</p>
        </label>
      </div>
    </div>
  );
};
