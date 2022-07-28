import React, { useState,useRef } from "react";
import Layout from "../../../../components/Layout";
import Styles from "../../../../styles/ServiceAP.module.css";
import axios from 'axios'
import { useRouter } from 'next/router'
import { useUser, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import ReactToPrint from 'react-to-print'
import ComponentToPrint from "../../../../components/ComponentToPrint";

export default function EditServiceActionPlan({ data }) {
  const router = useRouter()
  let componentRef = useRef();

  const [activeActionPlan, setActiveActionPlan] = useState(false)

console.log("data",data)

  const notifyMessage = () => {
    toast.success("Service Action Plan updated!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const { user, error, isLoading } = useUser();
  const loggedUserRole = user && user["https://lanuevatest.herokuapp.com/roles"];


  const [clientData, setClientData] = useState({
    role:loggedUserRole,
    clientId:data[0]?.clientId,
    clientFirstName:data[0]?.clientfirstname,
    clientLastName :data[0]?.clientlastname,
    clientHCWEmail:data[0]?.clienthcwemail,
    planStartDate:data[0]?.planstartdate,
    userFirstName :data[0]?.userfirstname,
    userLastName:data[0]?.userlastname,
    goal1ServiceCategory:data[0]?.goal1servicecategory,
    goal1Summary:data[0]?.goal1summary,
    goal1Details:data[0]?.goal1details,
    goal1TargetDate:data[0]?.goal1targetdate,
    goal1ActionStep1:data[0]?.goal1actionstep1,
    goal1ActionStep2:data[0]?.goal1actionstep2,
    goal1ActionStep3:data[0]?.goal1actionstep3,
    goal2ServiceCategory:data[0]?.goal2servicecategory,
    goal2Summary:data[0]?.goal2summary,
    goal2Details :data[0]?.goal2details,
    goal2TargetDate:data[0]?.goal2targetdate,
    goal2ActionStep1:data[0]?.goal2actionstep1,
    goal2ActionStep2:data[0]?.goal2actionstep2,
    goal2ActionStep3:data[0]?.goal2actionstep3,
    goal3ServiceCategory:data[0]?.goal3servicecategory,
    goal3Summary:data[0]?.goal3summary,
    goal3Details:data[0]?.goal3details,
    goal3TargetDate:data[0]?.goal3targetdate,
    goal3ActionStep1:data[0]?.goal3actionstep1,
    goal3ActionStep2:data[0]?.goal3actionstep2,
    goal3ActionStep3:data[0]?.goal3actionstep3,
    comments:data[0]?.comments,
    goal1Completed:data[0]?.goal1completed==="0" || data[0]?.goal1completed===null ? false : true,
    goal2Completed:data[0]?.goal2completed==="0" || data[0]?.goal1completed===null ? false : true,
    goal3Completed:data[0]?.goal3completed==="0" || data[0]?.goal1completed===null ? false : true,
    goal1CompletionDate:data[0]?.goal1completiondate,
    goal2CompletionDate:data[0]?.goal2completiondate,
    goal3CompletionDate:data[0]?.goal3completiondate,
    HCWSignature:data[0]?.hcwsignature==="0" ? false : true,
    HCWSignatureDate:data[0]?.HCWSignatureDate==="0" ? false: true,
    supervisorSignature:data[0]?.supervisorsignature==="0" ? false : true,
    clientSignature:data[0]?.clientsignature===0 ? false : true,
    progressnotesid:data[0]?.progressnotesid.length===1 && data[0]?.progressnotesid[0]===null ? "": data[0]?.progressnotesid,
    linkage_navigation_folder_url:data[0]?.linkage_navigation_folder_url
  });

  console.log("clientData",clientData)


  const genericGoals = [
    "Attend all health appointments",
"Adhere to HIV medication",
"Remove barriers to accessing medication",
"Access HIV primary care",
"Consistently measure CD4 Count and Viral load",
"Reduce unsafe sexual behavior",
"Start using PrEP",
"Prevention counselling",
"Access supportive counselling",
"Problems with substance use",
"Overdose prevention",
"Assistance with employment",
"Assistance with education",
"Assistance with housing services",
"Addressing a legal issue",
"Transportation",
"Improve food security",
"Gain access to public assistance",
"Assistance with ID-related documents",
"Other"
  ]

  const services = [
  "CD4/VL Lab Report Check",
  "Transportation Coordination",
  "Translation/Interpretation",
  "Comprehensive Behavioral Risk Assessment",
  "Treatment Education and Adherence Counselling",
  "Prevention Counselling",
  "Supportive Counselling",
  "Escort",
  "Linkage to Services",
  "Other form of Assistance",
    ]


  const displayServices = (arr) => {
    return arr.map((service, index) => {
      return (
        <option className="" value={service} key={index}>
          {service}
        </option>
      );
    });
  };

  const displayGenericGoals = (arr) => {
    return arr.map((goal, index) => {
      return (
        <option className="" value={goal} key={index}>
          {goal}
        </option>
      );
    });
  };

  const updateClientActionPlan = ()=>{
    console.log('id before put',clientData.clientId)
    axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/services_action_plan/${clientData.clientId}`, {
      clientData
    })
    .then(function (response) {


      if(response.status===200 || response.statusText==='Ok'){
        notifyMessage()
          setTimeout(()=>{
            router.push(`/clients/${clientData.clientId}/profile`)
          },2300)
        } 
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  const setLocaleDateString = (date) => {
    const fecha = Date.parse(date)
    const newDate=new Date(fecha).toLocaleDateString().replace("/","-").replace("/","-")
    const separatedDate=newDate.split('-')
    const finalDate=`${separatedDate[2]}-${separatedDate[1]?.length===1?`0${separatedDate[1]}`:separatedDate[1]}-${separatedDate[0]?.length===1?`0${separatedDate[0]}`:separatedDate[0]}`
    return finalDate
  }


const getDate=(date)=>{
const fecha =  Date.parse(date)
const newDate= new Date(fecha).toLocaleDateString()
const separatedDate=newDate.split('/')
const prefinalDate=separatedDate.reverse() 
const finalDate=prefinalDate.join('-')
return finalDate
}  

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Layout>
        <section className="my-5">
          <div className="container mx-auto">
            <div className="md:text-center font-black md:p-0 px-5">
              <h3>Service Action Plan</h3>
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <button
            onClick={() => router.back()}
            className="bg-black hover:bg-blue-300 px-5 py-1 rounded text-white inline-block text-xs mr-5 flex items-center"
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12H8M8 12L11.5 15.5M8 12L11.5 8.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to client profile
          </button>
        </section>
        <section id="info" className="my-5 px-5">
          <div className="container mx-auto">
            <h6 className="font-black my-5 text-dark-blue">
              Client Information <br />
            </h6>
            <div
              className={`${Styles.serviceActionPlanPageInfoContainer} gap-x-5 border-dark-blue rounded-xl p-5`}
            >
              {/*      <p>{clientData.planStartDate}</p> */}
              <div className="service-action-plan-page-info-box md:my-0 my-5">
              <div className="flex gap-x-2 mb-5 items-center">
                    <img src="/calendar-icon.svg" width="24"/>
                    <h3 className="font-black ">Date</h3>
                  </div>
                <label className="block">
                  <span className="text-xs">Plan start date</span>
                  <p>
                    {new Date(clientData.planStartDate).toLocaleDateString(
                      "en",
                      { year: "numeric", month: "numeric", day: "numeric" }
                    )}
                  </p>
                  {/* <input
                    type="date"
                    className="block w-full rounded-md border p-2  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xs"
                    value={getDate(clientData.planStartDate)}
                    onChange={(e)=>setClientData({...clientData,planStartDate:e.target.value})}
                    /> */}
                </label>
              </div>

              <div className="service-action-plan-page-info-box md:my-0 my-5">
              <div className="flex gap-x-2 mb-5 items-center">
                  <img src="/client-icon.svg" width="24"/>
                  <h3 className="font-black ">Client</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <label className="block">
                    <span className="text-xs">First Name</span>
                    <input
                      type="text"
                      className="block w-full bg-blue-50 rounded-md  p-2  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xs"
                      value={data[0]?.clientfirstname}
                      disabled
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs">Last Name</span>
                    <input
                      type="text"
                      className="block w-full bg-blue-50 rounded-md  p-2  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xs"
                      onChange={(e) =>
                        setUserData({ ...clientData, email: e.target.value })
                      }
                      value={data[0]?.clientlastname.charAt(0)}
                      disabled
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs">Client ID</span>
                    <input
                      type="text"
                      className="block w-full bg-blue-50  p-2 rounded-md  p-2  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xs"
                      value={data[0]?.clientId}
                      disabled
                    />
                  </label>
                </div>
              </div>

              <div className="service-action-plan-page-info-box">
              <div className="flex gap-x-2 mb-5 items-center">
                  <img src="/client-icon.svg" width="24"/>
                  <h3 className="font-black ">Health Care Worker</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs">First Name</span>
                    <input
                      type="text"
                      className="block w-full bg-yellow-50 rounded-md  p-2  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xs"
                      value={data[0]?.userfirstname}
                      disabled
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs">Last Name</span>
                    <input
                      type="text"
                      className="block w-full bg-yellow-50 rounded-md  p-2  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xs"
                      value={data[0]?.userlastname}
                      disabled
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="goals" className="my-5 md:px-0 px-5">
          <div className="container mx-auto">
            <h6 className="font-black my-5 text-dark-blue">Client Goals</h6>
          </div>
          <div
            className={`border-dark-blue container mx-auto rounded-xl px-5 py-5 
            ${!activeActionPlan? 'pointer-events-none' : ''}`}
          >
            <div className="service-action-plan-goals-container grid md:grid-cols-3 grid-cols-1 gap-5">
              <div className="service-action-plan-goal-box">
                <div className="service-action-plan-page-goals-top grid gap-5">
            
                  <div className="flex justify-between items-center ">
                    <h5 className="font-black ">Goal 1</h5>
                    <div className="bg-dark-blue w-56 h-px"></div>
                    <img src={'/goal01.svg'} alt=""/>
                    
                  </div>

                  <div className="h-2 mb-2">
                  {clientData.goal1Completed && (
                      <p className="px-3 py-1 rounded-lg shadow font-black text-xs bg-green-300">
                        Completed:{" "}
                        {new Date(
                          clientData.goal1CompletionDate
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                  <label className="block">
                    <h6 className="font-black">Summary</h6>

                    <select
                      onChange={(e) =>
                        setClientData({
                          ...clientData,
                          goal1Summary: e.target.value,
                        })
                      }
                      className={`${!activeActionPlan? 'appearance-none':'' } text-xs w-full mt-1 rounded-md py-2 pl-1 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                    >
                      <option value={clientData.goal1Summary} selected="true">
                        {clientData.goal1Summary}
                      </option>
                      {/*   <option  disabled="disabled">Select</option> */}

                      {displayGenericGoals(genericGoals)}
                    </select>
                  </label>

                 {/*  <label className="block">
                    <h6 className="font-black">Service Category</h6>

                    <select
                      onChange={(e) =>
                        setClientData({
                          ...clientData,
                          goal1ServiceCategory: e.target.value,
                        })
                      }
                      className="appearance-none pl-1 text-xs w-full mt-1 tezr-xs rounded-md py-2 p-r-5 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                    >
                      <option
                        value={clientData.goal1ServiceCategory}
                        selected="true"
                      >
                        {clientData.goal1ServiceCategory}
                      </option>
                      <option  disabled="disabled">Select</option> 
                      {displayServices(services)}
                    </select>
                  </label> */}
                  <label className="block">
                    <h6 className="font-black">Details</h6>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal1Details: e.target.value,
                        });
                      }}
                      value={clientData.goal1Details}
                    ></textarea>
                  </label>

                  <label className="block">
                    <h6 className="font-black">Target Date</h6>
                    <input
                      type="date"
                      className="border-black w-full rounded p-2 text-xs"
                      value={
                        clientData.goal1TargetDate &&
                        clientData.goal1TargetDate.split("T")[0]
                      }
                      onChange={(e) =>
                        setClientData({
                          ...clientData,
                          goal1TargetDate: e.target.value,
                        })
                      }
                    />
                  </label>

                  <label className="block">
                    <div className="flex items-center">
                    <h6 className="font-black mr-2">Action 1</h6>
                    <img src={"/action01.svg"} alt="" width="50" height="10"/>
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal1ActionStep1: e.target.value,
                        });
                      }}
                      value={clientData.goal1ActionStep1}
                    ></textarea>
                  </label>

                  <label className="block">
                  <div className="flex items-center">
                    <h6 className="font-black mr-2">Action 2</h6>
                    <img src={"/action02.svg"} alt="" width="50" height="10"/>
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal1ActionStep2: e.target.value,
                        });
                      }}
                      value={clientData.goal1ActionStep2}
                    ></textarea>
                  </label>

                  <label className="block">
                  <div className="flex items-center">
                    <h6 className="font-black mr-2">Action 3</h6>
                    <img src={"/action03.svg"} alt="" width="50" height="10"/>
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal1ActionStep3: e.target.value,
                        });
                      }}
                      value={clientData.goal1ActionStep3}
                    ></textarea>
                  </label>
                </div>
              </div>

              <div className="service-action-plan-goal-box">
                <div className="service-action-plan-page-goals-top grid gap-5">
                  <div className="flex justify-between items-center ">
                    <h5 className="font-black ">Goal 2</h5>
                    <div className="bg-dark-blue w-56 h-px"></div>
                    <img src={'/goal02.svg'} alt=""/>
                  </div>
                  <div className="h-2 mb-2">
                  {clientData.goal2Completed && (
                      <p className="px-3 py-1 rounded-lg shadow font-black text-xs bg-green-300">
                        Completed:{" "}
                        {new Date(
                          clientData.goal2CompletionDate
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                  <label className="block">
                    <h6 className="font-black">Summary</h6>

                    <select
                      onChange={(e) =>
                        setClientData({
                          ...clientData,
                          goal2Summary: e.target.value,
                        })
                      }
                      className={`${!activeActionPlan? 'appearance-none':'' } text-xs w-full mt-1 rounded-md py-2 pl-1 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                    >
                      <option value={clientData.goal2Summary} selected="true">
                        {clientData.goal2Summary}
                      </option>
                      {/*   <option  disabled="disabled">Select</option> */}

                      {displayGenericGoals(genericGoals)}
                    </select>
                  </label>

                  {/* <label className="block">
                    <h6 className="font-black">Service Category</h6>

                    <select
                      onChange={(e) =>
                        setClientData({
                          ...clientData,
                          goal2ServiceCategory: e.target.value,
                        })
                      }
                      className="appearance-none pl-1 text-xs w-full mt-1 tezr-xs rounded-md py-2 p-r-5 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                    >
                      <option
                        value={clientData.goal2ServiceCategory}
                        selected="true"
                      >
                        {clientData.goal2ServiceCategory}
                      </option>
                      {<option  disabled="disabled">Select</option>}
                      {displayServices(services)}
                    </select>
                  </label> */}
                  <label className="block">
                    <h6 className="font-black">Details</h6>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal2Details: e.target.value,
                        });
                      }}
                      value={clientData.goal2Details}
                    ></textarea>
                  </label>

                  <label className="block">
                    <h6 className="font-black">Target Date</h6>
                    <input
                      type="date"
                      className="border-black w-full rounded p-2 text-xs"
                      onChange={(e) =>
                        setClientData({
                          ...clientData,
                          goal2TargetDate: e.target.value,
                        })
                      }
                      value={
                        clientData.goal2TargetDate &&
                        clientData.goal2TargetDate.split("T")[0]
                      }
                    />
                  </label>

                  <label className="block">
                  <div className="flex items-center">
                    <h6 className="font-black mr-2">Action 1</h6>
                    <img src={"/action01.svg"} alt="" width="50" height="10"/>
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal2ActionStep1: e.target.value,
                        });
                      }}
                      value={clientData.goal2ActionStep1}
                    ></textarea>
                  </label>

                  <label className="block">
                  <div className="flex items-center">
                    <h6 className="font-black mr-2">Action 2</h6>
                    <img src={"/action02.svg"} alt="" width="50" height="10"/>
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal2ActionStep2: e.target.value,
                        });
                      }}
                      value={clientData.goal2ActionStep2}
                    ></textarea>
                  </label>

                  <label className="block">
                  <div className="flex items-center">
                    <h6 className="font-black mr-2">Action 3</h6>
                    <img src={"/action03.svg"} alt="" width="50" height="10"/>
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      value={clientData.goal2ActionStep3}
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal2ActionStep3: e.target.value,
                        });
                      }}
                    ></textarea>
                  </label>
                </div>
              </div>

              <div className="service-action-plan-goal-box">
                <div className="service-action-plan-page-goals-top grid gap-5">
                  <div className="flex justify-between items-center ">
                    <h5 className="font-black ">Goal 3</h5>
                    <div className="bg-dark-blue w-56 h-px"></div>
                    <img src={'/goal03.svg'} alt=""/>
          
                  </div>

                  <div className="h-2 mb-2">
                  {clientData.goal3Completed && (
                      <p className="px-3 py-1 rounded-lg shadow font-black text-xs bg-green-300">
                        Completed:{" "}
                        {new Date(
                          clientData.goal3CompletionDate
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>

                  <label className="block">
                    <h6 className="font-black">Summary</h6>

                    <select
                      onChange={(e) =>
                        setClientData({
                          ...clientData,
                          goal3Summary: e.target.value,
                        })
                      }
                      className={`${!activeActionPlan? 'appearance-none':'' } text-xs w-full mt-1 rounded-md py-2 pl-1 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                    >
                      <option value={clientData.goal3Summary} selected="true">
                        {clientData.goal3Summary}
                      </option>
                      {/*   <option  disabled="disabled">Select</option> */}

                      {displayGenericGoals(genericGoals)}
                    </select>
                  </label>

                  {/* <label className="block">
                    <h6 className="font-black">Service Category</h6>

                    <select
                      onChange={(e) =>
                        setClientData({
                          ...clientData,
                          goal3ServiceCategory: e.target.value,
                        })
                      }
                      className="appearance-none pl-1 text-xs w-full mt-1 tezr-xs rounded-md py-2 p-r-5 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                    >
                      <option
                        value={clientData.goal3ServiceCategory}
                        selected="true"
                      >
                        {clientData.goal3ServiceCategory}
                      </option>
                      <option  disabled="disabled">Select</option>
                      {displayServices(services)}
                    </select>
                  </label> */}
                  <label className="block">
                    <h6 className="font-black">Details</h6>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal3Details: e.target.value,
                        });
                      }}
                      value={clientData.goal3Details}
                    ></textarea>
                  </label>

                  <label className="block">
                    <h6 className="font-black">Target Date</h6>
                    <input
                      type="date"
                      className="border-black w-full rounded p-2 text-xs"
                      onChange={(e) =>
                        setClientData({
                          ...clientData,
                          goal3TargetDate: e.target.value,
                        })
                      }
                      value={
                        clientData.goal1TargetDate &&
                        clientData.goal1TargetDate.split("T")[0]
                      }
                    />
                  </label>

                  <label className="block">
                  <div className="flex items-center">
                    <h6 className="font-black mr-2">Action 1</h6>
                    <img src={"/action01.svg"} alt="" width="50" height="10"/>
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal3ActionStep1: e.target.value,
                        });
                      }}
                      value={clientData.goal3ActionStep1}
                    ></textarea>
                  </label>

                  <label className="block">
                  <div className="flex items-center">
                    <h6 className="font-black mr-2">Action 2</h6>
                    <img src={"/action02.svg"} alt="" width="50" height="10"/>
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal3ActionStep2: e.target.value,
                        });
                      }}
                      value={clientData.goal3ActionStep2}
                    ></textarea>
                  </label>

                  <label className="block">
                  <div className="flex items-center">
                    <h6 className="font-black mr-2">Action 3</h6>
                    <img src={"/action03.svg"} alt="" width="50" height="10"/>
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border-black w-full rounded p-1 text-xs"
                      onChange={(e) => {
                        setClientData({
                          ...clientData,
                          goal3ActionStep3: e.target.value,
                        });
                      }}
                      value={clientData.goal3ActionStep3}
                    ></textarea>
                  </label>
                </div>
              </div>
            </div>
            <label className="block">
              <h6 className="font-black">Additional Comments</h6>
              <textarea
                name=""
                id=""
                cols="30"
                rows="4"
                className="border-black w-full rounded p-1 text-xs"
                onChange={(e) => {
                  setClientData({ ...clientData, comments: e.target.value });
                }}
                value={clientData.comments || ""}
              ></textarea>
            </label>
          </div>
        </section>
        <section id="other" className="my-5 md:px-0 px-5">
          <div className="container mx-auto">
            <h6 className="font-black my-5 text-dark-blue">Signatures</h6>

            <div className={`${!activeActionPlan? 'pointer-events-none' : ''} border-dark-blue  rounded-xl px-5 py-5`}>
              <h6 className="font-black"></h6>
              <div className="others-container grid md:grid-cols-3 grid-cols-1 justify-center">
                <div className="others-container-box flex gap-2 justify-center items-center">
                  <p>Has the client signed?</p>
                  <input
                    type="checkbox"
                    className="border-dark-blue"
                    onClick={(e) => {
                      setClientData({
                        ...clientData,
                        clientSignature: !clientData.clientSignature,
                      });
                    }}
                    checked={clientData?.clientSignature ? true : false}
                  />
                </div>
                <div className="others-container-box flex gap-2 justify-center items-center">
                  <p>Has the health care worker signed?</p>
                  <input
                    type="checkbox"
                    className="border-dark-blue"
                    onClick={(e) => {
                      setClientData({
                        ...clientData,
                        HCWSignature: !clientData.HCWSignature,
                      });
                    }}
                    checked={clientData?.HCWSignature ? true : false}
                  />
                </div>
                <div className="others-container-box flex gap-2 justify-center items-center">
                  <p>Has the supervisor signed?</p>
                  <input
                    type="checkbox"
                    className="border-dark-blue"
                    onClick={(e) => {
                      setClientData({
                        ...clientData,
                        supervisorSignature: !clientData.supervisorSignature,
                      });
                    }}
                    checked={clientData?.supervisorSignature ? true : false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="other" className="my-5 md:px-0 px-5">
          <div className="container mx-auto">
            <h6 className="font-black my-5 text-dark-blue">Progress Notes</h6>

            <div className="border-dark-blue  rounded-xl px-5 py-5">
              <div className="others-container grid md:grid-cols-3 grid-cols-1 justify-center">
                <div className="others-container-box flex gap-2 ">
                  <p>
                    Number of client progress notes:{" "}
                    <span className="text-dark-blue font-black">
                      {clientData.progressnotesid?.length}
                    </span>
                  </p>
                </div>
                <div className="others-container-box flex gap-2 justify-center items-center">
                <p>
                    Dropbox folder:{" "}
                    
                  </p>
                  <a href={clientData?.linkage_navigation_folder_url} target='_blank' rel="noreferrer">
                  <img src={'/dropbox-folder.png'} alt="" width="34"/>
                  </a>
                </div>
                <div className="others-container-box flex gap-2 justify-center items-center">
                
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="save" className="my-5">
          <div className="container mx-auto flex justify-center">
            {loggedUserRole === "HCW" ? (
              ""
            ) : (
              <div id="buttons-container" className="flex items-center justify-around">
                <button className={`${!activeActionPlan? 'block':'hidden'} flex items-center justify-around w-36 bg-light-blue hover:bg-blue-300 hover:text-white  py-1 rounded text-blue-500 text-xs`}
                onClick={() => setActiveActionPlan(!activeActionPlan)}>
                  <img src='/edit-action-plan-button.svg' alt='edit action plan button' ></img>
                  Edit Action Plan
                </button>
                
                <button
                className="flex items-center justify-around w-36 bg-blue-500 hover:bg-blue-300  py-1 mx-4 rounded text-white  text-xs"
                onClick={(e) => {
                  updateClientActionPlan();
                }}>
                  <img src='/check-save-and-finish.svg' alt='save and finish button' ></img>

                Save and finish
              </button>
              <ReactToPrint
              trigger={() => (
                <button className="flex items-center justify-around w-36 bg-black hover:bg-gray-700  py-1 rounded text-white  text-xs ">
                  <img src='/print-and-sign.svg' alt='Print and sign button' ></img>

                  Print and sign
                </button>
              )}
              content={() => componentRef.current}
              /> 
             
              </div>
            )}
            

            <div style={{ display: "none" }}>
              <ComponentToPrint
                ref={componentRef}
                name="alexei"
                clientData={clientData}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  
  async getServerSideProps(ctx) {
    let { clientid } = ctx.params;
    const  response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/services_action_plan/${clientid}`
    );

    const data = await  response.json();
    return { props: { data } };
  },
});
