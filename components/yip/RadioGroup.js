import React from 'react'

export default function RadioGroup({options,surveyForm,setSurveyForm,title,stateValue}) {



  
  return (
    <div className="">
    <h2 className="font-black">
      {title}
    </h2>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
      {options?.map((option, index) => {
        return (
          <label className="flex gap-x-5 items-center" key={index}>
            <input
              type="radio"
              className=""
              value={option.value}
              id={option.id}
              onChange={(e) => {
                if (e.target.value !== 'Other') setSurveyForm(prev=> ({...prev,[`${stateValue}Other`]: '' })) 
                setSurveyForm({...surveyForm, [stateValue]: option.value })
              }
              }
              name={stateValue}
              defaultChecked={
                option.value === surveyForm?.[stateValue] ? "checked" : ""
              }
            />
            <p className="">{option.value}</p>
            {option === 'Other' && (
              <input type="text" 
              onChange={(e) =>
                setSurveyForm({...surveyForm, [`${stateValue}Other`]: e.target.name })
              }
              />
            )}
          </label>
        );
      })}
    </div>
  </div>
);
}
