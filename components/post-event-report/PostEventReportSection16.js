import React from 'react'

const PostEventReportSection16 = () => {
  return (
    <div className="p-5  rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">16 </span>
        How many people did you text or call about the event?
      </h2>
      <div className='flex gap-5 justify-center'>
        <img src='/post_event_report/text_call_icon.svg' alt='adult volunteers icon' />
      <input
        type="number"
        className="p-2 border-dark-violet rounded"
        placeholder="eg. 5"
        name="textOrCall"
        // onChange={handleForm}
        // defaultValue={event?event.eventname:""}
      />
    </div>
    </div>
  )
}

export default PostEventReportSection16