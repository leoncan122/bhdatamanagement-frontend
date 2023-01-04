import React from 'react'

const Cluster
 = ({setEventForm}) => {
    const handleForm = (e) => setEventForm((prev) =>({...prev, [e.target.name]: e.target.value}));
    const options=[
        {id:1,value:'Bronx Cluster'},
        {id:2,value:'Brooklyn Cluster'},
        {id:3,value:'Manhattan Cluster'},
        {id:4,value:'Queens Cluster'},
        {id:5,value:'Staten Island Cluster'},
        
    ]
    return (
      <div className="px-7 question-body">
        <h2 className="font-black">
        Which cluster delivered the event?
        </h2>
        <div>
          {options.map((option, index) => (
            <label key={index}
            >
            <input type="radio" name="whichCluster" value={option.value} onChange={handleForm}/>
            <p>{option.value}</p>
          </label>
          ))}
        </div>
      </div>
    );
}

export default Cluster
