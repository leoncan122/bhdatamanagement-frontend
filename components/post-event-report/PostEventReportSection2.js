import React from 'react'

import { roles } from '../../utils/sharedData'

const PostEventReportSection2 = () => {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    justifyContent:'space-between',
    placeItems:'items-center',
    gap:'5px'
  };
  return (
    <div className="p-5">
    <h3 className="font-black"><span className="text-color-violet">2</span> What was your role at the event? (if you had more than one role, what was your MAIN role at this event?)</h3>
    <div className="mt-5 grid md:grid-cols-4 grid-cols-1 space-between gap-5" >
    {roles.map((role,index)=>{
    if(index===roles.length-1){
      return (
        <label className="text-lg flex items-center" key={index}>
          <input
            type="radio"
            name="roles"
            className="mr-2 w-4 h-4"
            value={role}
            id={index}
            //defaultChecked={program.id===event?.programid?'checked':""}
          />
          {role}
          <input type="text" placeholder="other..." className="border-dark-violet rounded px-5 self-start p-1 ml-2" />
        </label>

      )
    } else {
      return (
        <label className="text-lg flex items-center" key={index}>
          <input
            type="radio"
            name="roles"
            className="mr-2 w-4 h-4"
            value={role}
            id={index}
            //defaultChecked={program.id===event?.programid?'checked':""}
          />
          {role}
          
        </label>

      )
    }
  })}
      </div>
</div>
  )
}

export default PostEventReportSection2