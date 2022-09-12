import React from 'react'

const PostEventReportSection21 = ({eventForm,setEventForm}) => {

  return (
    <div className="px-7 rounded mt-10">
      <h2 className=" font-black">
        Was testing done at the event
      </h2>
      <div className="mt-7 grid grid-cols-1 gap-5">
      <p className="text-lg flex items-center" >
        <input
          type="radio"
          name="eventTestingDone"
          className="mr-5"
          
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: true,
            }))
          }
          // defaultChecked={program.id === event?.programid ? "checked" : ""}
        />
        Yes
      </p>
      <p className="text-lg flex items-center ">
        <input
          type="radio"
          name="eventTestingDone"
          className="mr-5"
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: false,
            }))
          }
        />
        No
      </p>

      </div>
      
    </div>
  )
}

export default PostEventReportSection21