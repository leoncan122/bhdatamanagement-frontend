import React from "react";

const AdditionalMaterials = ({eventForm,setEventForm,event}) => {
  
  return (
    
    <div className="">
       <h2 className="mb-7 font-black">Additional material</h2>
        <label htmlFor="additionalMaterials">
      <textarea
        className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="additionalMaterials"
        placeholder=""
        onChange={(e) =>
          setEventForm((previous) => ({
            ...previous,
            [e.target.name]:e.target.value
          }))
        }
        defaultValue={event?event.additionalmaterials:""}
      />
     </label>
    </div>
  );
};

export default AdditionalMaterials;