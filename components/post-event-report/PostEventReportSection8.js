import React from 'react';
import { resourcesDistributed } from '../../utils/sharedData';

const PostEventReportSection8 = ({eventForm,setEventForm}) => {
const handleForm = (e) => {
  let {value} = e.target
    let finalValue;
    value > 500 ? finalValue = 500:finalValue=value
    setEventForm((previous) => ({
      ...previous,
      [e.target.name]:Number(finalValue)
    }))
}
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="">8 </span>
        Resources Distributed:
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        {resourcesDistributed &&
          resourcesDistributed.map((resource, index) => (
            <>{resource.name}
            <label className="text-lg " key={index}>
              {/* <img src={resource.source} alt={`${resource.name} icon`} className="w-8 h-8 md:w-12 md:h-12"/> */}
              <input
                type="number"
                name={resource.dataFieldName}
                className="mr-2  w-20 p-1 border-black rounded"
                id={index}
                defaultValue={0}
                onChange={handleForm}
                onKeyUp={(e) => {
                  let {value} = e.target
                  value > 500 && (e.target.value = 500) 
                }}
              />
              
            </label>
            </>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection8