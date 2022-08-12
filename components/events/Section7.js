import React, {useState, useEffect} from 'react';

const Section7 = ({eventForm, setEventForm, locationTypes,event}) => {
   
    const [fields, setFields] = useState([]);

    useEffect(() => {
        /* if (eventForm.programName) {
            const programNameConverted = convertStringTocompareWithProgramName(eventForm.programName)
            const filtered = locationTypes.filter(locationType => locationType[programNameConverted] === "1" )
            setFields(filtered)
        } */
        if (eventForm.programName && !event) {
            const programNameConverted = convertStringTocompareWithProgramName(eventForm?.programName)
            //const eventProgramNameConverted = convertStringTocompareWithProgramName(event?.programname)
            const filtered = locationTypes.filter(locationType => locationType[programNameConverted] === "1")
            setFields(filtered)
        } 

        if (eventForm.programName && event) {
            const programNameConverted = convertStringTocompareWithProgramName(eventForm?.programName)
            const eventProgramNameConverted = convertStringTocompareWithProgramName(event?.programname)
            const filtered = locationTypes.filter(locationType => event?locationType[programNameConverted] === "1": locationType[eventProgramNameConverted] === "1")
            setFields(filtered)
        } 

    }, [eventForm.programName]);

    const convertStringTocompareWithProgramName = (string) => string.toLowerCase().replace(/\s/g, '');
    const  capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);


    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventLocationTypeName: capitalizeFirstLetter(e.target.value),  eventLocationTypeID: e.target.id}))
      };
    const handleFormId = (e) => {
        setEventForm(previous => ({...previous, eventLocationTypeID: e.target.id}))
    };

    return (
        <div className='p-5 bg-extra-light-violet rounded'>
            <h2 className='mb-3 font-bold'><span className='text-color-violet'>7</span> What type of event location will the event be held at?</h2>
             <div className='grid grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-5 '>
                {fields && fields.map(location => (
                    location.name !== "Other" ?

                    <label className='text-lg flex items-center' key={location.id}>
                    <input type="radio" 
                    name="eventLocationTypeName" 
                    className='mr-2 w-4 h-4' 
                    value={location.name} 
                    id={location.id}
                    onChange={handleForm}
                    defaultChecked={location.name===eventForm.eventLocationTypeName ?'checked':""}
                    />
                    {location.name}
                    </label> :

                    <label className="flex items-center p-2 ">
                    <input type="radio" 
                    name="eventLocationTypeId" className='mr-2 w-4 h-4' 
                    id={location.id}
                    onChange={handleFormId}/>
                    <p className="mr-2">Other</p>
                    <input type="text" 
                    name="eventLocationTypeName"
                    onChange={handleForm} 
                    className='w-full p-2 border-dark-violet rounded' 
                    placeholder="Please specify here"/>
                </label>

                ))}
                
             </div>
        </div>
    );
}

export default Section7;
