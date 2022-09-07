import React from 'react';
import { roles } from '../../utils/sharedData';

export const ParticipantSurveySection7 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "roleID": Number(e.target.id) })
  }
  return (
    <div className="p-5">
      <h2 className="font-black">
        <span className="">7</span> What is your role? 
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
      {roles.map(option => (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className="mr-10 w-6 h-6" value={option.value} id={option.id} onChange={handleForm} name="participantRole" />
        <p className="">{option.value}</p>
      </label>
      ))}
        
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" value="Decline to answer" onChange={handleForm} name="participantRole" />
          <p className="">Decline to answer </p>
          <input type="text" placeholder='Please specify' className='border-black p-1 rounded' />
        </label> 
      </div>
    </div>
  )
}
