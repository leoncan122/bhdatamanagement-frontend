import React from 'react';

const Section2 = ({eventForm, setEventForm, }) => {
    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventName: e.target.value}))
      }
    return (
        <div className='p-5 bg-extra-light-violet rounded'>
            <h2 className='mb-3 font-bold'><span className='text-color-violet'>2</span> What is the name of the event?</h2>
            <input type="text" className="w-full p-2 border-dark-violet rounded" placeholder='Type the name of the event here' onChange={handleForm}/>
        </div>
    );
}

export default Section2;
