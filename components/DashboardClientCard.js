import React from 'react'
import Link from 'next/link'

export default function DashboardClientCard({client,index,loggedUserRole}) {

  const getDate=(date)=>{
    const fecha =  Date.parse(date)
    const newDate= new Date(fecha).toLocaleDateString('en',{year:'numeric',month:'numeric',day:'numeric'})
    const separatedDate=newDate.split('/')
    const finalDate=separatedDate.join('-')
    return newDate
    }  



  return (
    <Link href={loggedUserRole ==='DES'  ? `/clients/${client.clientid}/msa_form/des_msa_form_edit/`:`/clients/${client.clientid}/profile/`}>
   <a>
    <div className="dashboard-clients-box cursor-pointer" key={index}>
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
      <div className="grid dashboard-card-name-box gap-5 ">

                  <img src="/client-icon.svg" width="44"/>


        <div>
        <h5 className="text-gray-900 text-xl leading-tight font-black">
          {client.clientfirstname}{' '}{client.clientlastname.charAt(0)}
        </h5>
        <p className="text-dark-blue">{client.clientid}</p>
        </div>
      </div>
      
      <div className="grid dashboard-card-name-box my-2 items-center pl-2">
      <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
      <path d="M7 12.5L10 15.5L17 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

        <p className=""><span className="font-black ">Active</span></p>
      </div>

      <div className="flex dashboard-card-name-box  items-center pl-2 justify-between">
      <h6 className="font-black text-xs">Last Updated</h6>
      {/* <p className="font-black ">{new Date().toLocaleDateString()}</p> */}
      <p className="font-black ">{getDate(client.clientdatecreated)}</p>
      </div>
      <div className="grid dashboard-card-name-box  items-center pl-2">
      
        <p className=""><span className="font-black ">{new Date().toDateString}</span></p>
      </div>
     
      <div className="">
      
        <button
        type="button"
        className="mt-1 w-full flex items-center gap-x-2 justify-center px-6 py-3 btn-darkBlue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover-bg-dark-blue hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out"
      >
       <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.1679 8C19.6247 4.46819 16.1006 2 11.9999 2C6.81459 2 2.55104 5.94668 2.04932 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.88146 16C4.42458 19.5318 7.94874 22 12.0494 22C17.2347 22 21.4983 18.0533 22 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.04932 16H2.64932C2.31795 16 2.04932 16.2686 2.04932 16.6V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

        View Client
      </button>
     
     
      </div>
    </div>
  </div>
  </a>
   </Link>
  )
}
