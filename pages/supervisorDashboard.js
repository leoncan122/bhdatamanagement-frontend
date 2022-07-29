import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useUser, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import styles from "../styles/Home.module.css";
import UserListRow from "../components/UserListRow";
import AddUserModal from "../components/AddUserModal";
import AddClientModal from "../components/CreateClientModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropbox } from "dropbox";
import DashboardClientCard from "../components/DashboardClientCard";

import Layout from "../components/Layout";
import ImpactBaselineModal from "../components/ImpactBaselineModal";

export default function SupervisorDashboard({  }) {
  const { user, error, isLoading } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [totalMsaFormsNotCompleted, setTotalMsaFormsNotCompleted] = useState(
    []
  );
  const [notCompletedGoals, setNotCompletedGoals] = useState([]);
  const [showCreateClientModal, setShowCreateClientModal] = useState(false);
  const loggedUserRole =
    user && user["https://lanuevatest.herokuapp.com/roles"];
  const userId = user?.sub;
  const [noDataMessage, setNoDataMessage] = useState(false);

  /*   const [liveData,setLiveData]=useState(data) */

  /* console.log("data",data) */

  /* 
  const getUserClients = ()=> {

    if(loggedUserRole !=="Supervisor" && loggedUserRole !=="DES" ){

      const allClients= liveData.filter(client=>client.clienthcwid===userId).sort((a, b) => a.clientfirstname.localeCompare(b.clientfirstname))
      const userClients = allClients.map((client,index)=>{
        console.log("loggedUserRole1",loggedUserRole)
        return (<DashboardClientCard client={client} key={index} loggedUserRole={loggedUserRole}/>)
      })
      return userClients
    } else {
      console.log("loggedUserRole2",loggedUserRole)
      const hasMsaForm=liveData.filter(client=>client.msa_form_id!==null).sort((a, b) => a.clientfirstname.localeCompare(b.clientfirstname))
     const userClients= hasMsaForm.map((client,index)=>{
     return  <DashboardClientCard client={client} key={index} loggedUserRole={loggedUserRole}/>
      })
      return userClients
    }

    
   }
   const searchByClientIdOrClientName = (text) => {
    const result = data.filter(
      (client, index) =>
        client.clientfirstname.toLowerCase().includes(text.toLowerCase()) ||
        client.clientid.toLowerCase().includes(text.toLowerCase())
    );
    setLiveData(result);

    if (result.length <= 0) {
      setNoDataMessage(true);
    } else {
      setNoDataMessage(false);
    }
  };

  const searchByUserId =(userid)=>{
    console.log(userid)
    console.log("data antes",data)
if(userid!=="All"){
    setLiveData(data)
    const result = data.filter((client, index) => client.clienthcwid.toLowerCase()===userid.toLowerCase());
    setLiveData(result);
    if (result.length <= 0) {
      setNoDataMessage(true);
    } else {
      setNoDataMessage(false);
    }
} else {
  setLiveData(data)
  console.log("data despues",data)
}


  
  }


  const notifyMessage = () => {
    toast.success("A new client is being created!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const displayUserList = () => {
   return hcworkers && hcworkers.map((user, index) => {

      return (
        <option className="text-black" value={user.user_id} key={index}>
          {user.name} {user.lastname}
        </option>
      );
    });
  }; */



  console.log("user", user);

  return (
    <>
      <ToastContainer autoClose={60000} />
      <Head>
        <title>Supervisor`s Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="bg-light-purple h-screen">
          <section id="dashboard-client-list">
            <div className="container mx-auto">
              <section className=" py-5">
                <h1 className="font-black py-5 md:px-0 px-5">
                  Hello Melissa,
                </h1>
               
              </section>
              
              <h2 className="font-black my-2 md:px-0 px-5">
                What do you want <span className="bg-yellow">to do</span> today?
              </h2>
              <div className="grid md:grid-cols-6 grid-cols-1 mb-2">
                {loggedUserRole === "Supervisor" && (
                  <Link href="/users">
                    <div className="text-center mr-5 ">
                      <div className="rounded btn-yellow p-5 text-center shadow-xl   mb-2 rounded-xl">
                        <button id="myBtn">
                          <div className="flex justify-center">
                            <img src="/manage-users-icon.svg" alt="" />
                          </div>
                          <p className="my-5 font-bold">
                            MANAGE <br /> USERS
                          </p>
                        </button>
                      </div>{" "}
                    </div>
                  </Link>
                )}

              

              <div className="search-container grid md:grid-cols-2 grid-cols-1 gap-5 space-between">
                {loggedUserRole === "Supervisor" ||
                  (loggedUserRole === "DES" && (
                    <div className="search-box flex  items-center">
                      <p className="mr-5">Search by name or Client ID</p>

                      <div className="flex ">
                        <div className="flex border-1 border-black rounded-lg  rounded-lg">
                          <input
                            type="text"
                            className="px-4  w-80 rounded-lg "
                            placeholder="Search..."
                            onChange={(e) =>
                              searchByClientIdOrClientName(e.target.value)
                            }
                          />
                          <button className="px-4 py-1 text-white bg-dark-blue border-l rounded">
                            <svg
                              width="24"
                              height="24"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.5 15.5L19 19"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                {loggedUserRole === "Supervisor" ||
                  (loggedUserRole === "DES" && (
                    <div className="search-box flex items-center justify-end gap-3">
                      <p>Filter by HCW</p>
                      <img src="" alt="" />
                      <select
                        onChange={(e) => searchByUserId(e.target.value)}
                        className="text-xs  w-1/2 mt-1 rounded-md py-2 p-r-5 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                      >
                        <option selected="true" disabled="disabled">
                          Select HCW
                        </option>
                        <option onClick={() => searchByUserId("")}>All</option>
                        {displayUserList()}
                      </select>
                    </div>
                  ))}
              </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>

    
    </>
  );
}

/* export const getServerSideProps = withPageAuthRequired(); */

export const getServerSideProps = withPageAuthRequired()
