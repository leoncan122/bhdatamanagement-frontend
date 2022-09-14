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

import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/Layout";


export default function SupervisorDashboard({ selectedProgram }) {
  const { user, error, isLoading } = useUser();
  const [showModal, setShowModal] = useState(false);

    
  const programFromLocalStorage = () => { 
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem('program');
      const localStorageProgram = saved !== null ? JSON.parse(saved) : "";
      return localStorageProgram.programName;
    }
   }

  const program = useSelector((state)=>state.programs.value.programName) || programFromLocalStorage()

  const userName = user && user['https://lanuevatest.herokuapp.com/name']

  const [showCreateClientModal, setShowCreateClientModal] = useState(false);
  const loggedUserRole = 'Supervisor'
    // user && user["https://lanuevatest.herokuapp.com/roles"];
  const userId = user?.sub;
  const [noDataMessage, setNoDataMessage] = useState(false);


  return (
    <>
      <ToastContainer autoClose={60000} />
      <Head>
        <title>Supervisor`s Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout showStatusHeader={true}>
        <main className="">
          <section id="dashboard-client-list">
            <div className="container mx-auto">
              <section className="py-5">
              <h1 className="font-black  md:px-0 px-5">
                  Hello {userName}
                </h1>
              </section>

              <h1 className="font-black  md:px-0 px-5">
                What do you want <span className="">to do</span> today?
              </h1>
              <div className="grid md:grid-cols-6 grid-cols-1 mb-2 my-10">
                {loggedUserRole === "Supervisor" && (
                  <Link href="/users">
                    <div className="text-center mr-5 rounded bg-black text-white p-5 text-center shadow-xl   mb-2 rounded-xl grid justify-center content-center">
                      <div className="">
                        <button id="myBtn">
                          <div className="flex justify-center">

                            {/* <img src="/manage-users-icon.svg" alt="" /> */}

                          </div>
                          <p className="font-bold">
                            MANAGE <br /> USERS
                          </p>
                        </button>
                      </div>{" "}
                    </div>
                  </Link>
                )}
                 <div className="text-center mr-5 rounded bg-black p-5 text-center shadow-xl mb-2 rounded-xl grid justify-center content-center">
            <Link href={`/events/${program?.toLowerCase()}/register`}>
            <div className=" ">
              <button id="myBtn" className="flex items-center">
                
                 {/*  <img
                    src="/events/register_an_event_icon.svg"
                    alt=""
                    width={85}
                  /> */}
               
                <p className=" font-bold text-white uppercase">
                  Register <br /> an Event
                </p>
              </button>
              </div>
            </Link>
          </div>
                 <div className="text-center mr-5 rounded bg-black p-5 text-center shadow-xl   mb-2 rounded-xl grid justify-center content-center">
            <Link href="/events">
              <button id="myBtn">
                <div className="">
                  <div className="flex justify-center ">
                    {/* <img
                      src="/events/register_an_event_icon.svg"
                      alt=""
                      width={85}
                    /> */}
                  </div>
                  <p className=" font-bold text-white uppercase">
                    Manage <br /> existing events
                  </p>
                </div>{" "}
              </button>
            </Link>
          </div>
                <div className="text-center mr-5 rounded bg-black p-5 text-center shadow-xl   mb-2 rounded-xl grid justify-center content-center">
            <Link href="/events/reports/">
              <button id="myBtn">
                <div className="">
                  <div className="flex justify-center ">
                    {/* <img
                      src="/events/register_an_event_icon.svg"
                      alt=""
                      width={85}
                    /> */}
                  </div>
                  <p className=" font-bold text-white uppercase">
                    Create<br />Report
                  </p>
                </div>{" "}
              </button>
            </Link>
          </div>

            <div></div>
         
            <div className="text-center mr-5 rounded bg-black p-5 text-center shadow-xl   mb-2 rounded-xl grid justify-center content-center">
                <Link href="/historicalData">
                    <div className="text-center mr-5 ">
                      <div className="rounded bg-black p-5 text-center shadow-xl mb-2 rounded-xl grid justify-center content-center">
                        <button id="myBtn">
                          <div className="flex justify-center">
                            {/* <img src="/download_historical_data_icon.svg" alt="" width={85}/> */}
                          </div>
                          <p className="font-bold text-white uppercase">
                            Download <br /> Historical Data
                          </p>
                        </button>
                      </div>{" "}
                    </div>
                  </Link>
                  </div>
              

              
              </div>
            </div>
          </section>
        </main>
      </Layout>

    
    </>
  );
}


export const getServerSideProps = withPageAuthRequired();

