import React from 'react'

export const ParticipantSurveySection16 = () => {
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">16</span> Do you have one person you think of as your personal doctor or health care provider?
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantPCP"/>
          <p className="">Yes, only one </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantPCP"/>
          <p className="">Yes, more than one </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantPCP"/>
          <p className="">No</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantPCP"/>
          <p className="">Don’t know / Not sure</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantPCP"/>
          <p className="">Decline to answer</p>
        </label>
        
    </div>
  </div>
  )
}
