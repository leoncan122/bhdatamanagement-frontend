import React from 'react';

const Section2 = ({eventForm, setEventForm,event}) => {

   

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, oefEventEmail: e.target.value}))
      }
    return (
        <div className=''>
            <h2 className='mb-7 font-black'>Enter your email address:</h2>

            <label> 
            <input type="text" 
            className="w-134 p-2 border-black rounded text-lg" 

            placeholder='abc@myemail.com' 

            onChange={handleForm}
            defaultValue={event?event.eventname:""}
            />
            </label>

            
        </div>
    );
}

export default Section2;
