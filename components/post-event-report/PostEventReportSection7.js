import React from "react";

const PostEventReportSection7 = ({eventForm,setEventForm}) => {

  return (
    <div className="px-7 mt-10 rounded">
      <h2 className=" font-black">
         Enter the event location name, eg. business name or faith-based
        organization name
      </h2>
      <div className="mt-7 grid grid-cols-1 gap-5">
      <label className="text-lg flex gap-x-5 items-center" >
        <input
          type="radio"
          name="locationName"
          className=""
          // value={program.name}
          value="Black Health Office"
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]:e.target.value
            }))
          }
          // defaultChecked={program.id === event?.programid ? "checked" : ""}
        />
        Black Health Office
      </label>
      <label className="text-lg flex flex-col md:flex-row gap-y-5 md:gap-x-5 items-start md:items-center">
          <divc className="flex gap-5">
          <input
          type="radio"
          name="locationName"
          className=""
          value="Other"
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]:e.target.value
            }))
          }
        />
        Other
          </divc>
        
        <input
        name="locationNameOther"
          onChange={(e) => 
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]:e.target.value
            }))}
          type="text"
          className="p-4 text-base border-black rounded w-60"
          placeholder=""
        />
      </label>

      </div>
      
    </div>
  );
};

export default PostEventReportSection7;
