import React from 'react';

const Email = ({eventForm, setEventForm,event, maskField,stateValue}) => {

   

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, [stateValue]: e.target.value}))
      }
    return (
        <div className=''>
            <h2 className='mb-7 font-black'>Enter your email address:</h2>

            <label> 
            <input type="text" 
            className={`w-134 p-2 border-black rounded text-lg ${maskField && 'filter blur-sm'}`} 

            placeholder='abc@myemail.com' 

            onChange={handleForm}
            defaultValue={event?event[stateValue.toLowercase()]:""}
            />
            </label>

            
        </div>
    );
}

export default Email;
