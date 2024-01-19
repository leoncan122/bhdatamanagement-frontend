import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useSelector, useDispatch } from "react-redux";

import PageTopHeading from "../../../components/PageTopHeading";
import Layout from "../../../components/Layout";

export default function ReportsDashboard({ selectedProgram, user }) {
  const [showModal, setShowModal] = useState(false);

  const programFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("program");
      const localStorageProgram = saved !== null ? JSON.parse(saved) : "";
      return localStorageProgram.programName;
    }
  };

  const program =
    useSelector((state) => state.programs.value.programName) ||
    programFromLocalStorage();

  const userName = user && user["https://lanuevatest.herokuapp.com/name"];

  const [showCreateClientModal, setShowCreateClientModal] = useState(false);
  const loggedUserRole = "Supervisor";
  // user && user["https://lanuevatest.herokuapp.com/roles"];
  const userId = user?.sub;

  return (
    <>
      <Head>
        <title>OEF Data and Reports</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout showStatusHeader={true}>
        <main className="">
          <section id="dashboard-client-list">
            <div className="container mx-auto">
              <section className="py-5">
                <PageTopHeading
                  pageTitle={"OEF Data and Reports"}
                  dashboardBtn={true}
                  backBtn={true}
                />

                <div className="grid md:grid-cols-6 grid-cols-1 gap-5 mb-2 px-5 md:px-0 my-10">
                  <Link href={`/oef/data-reports/reports/monthlyFundingReport`}>
                    <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                      <button id="myBtn" className="flex items-center">
                        <p className=" font-bold text-white uppercase">
                          Monthly <br /> Funding <br /> Report
                        </p>
                      </button>
                    </div>
                  </Link>
                  <Link href={`/oef/data-reports/reports/quarterlyContractorReport`}>
                    <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                      <button id="myBtn" className="flex items-center">
                        <p className=" font-bold text-white uppercase">
                          Quarterly Report <br /> on BH work  <br /> <small>(Contractor)</small>
                        </p>
                      </button>
                    </div>
                  </Link>
                  <Link href={`/oef/data-reports/reports/quarterlySubcontractorReport`}>
                    <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                      <button id="myBtn" className="flex items-center">
                        <p className=" font-bold text-white uppercase">
                          Quarterly Report <br /> on FBO work <br /> <small>(Subcontractor)</small>
                        </p>
                      </button>
                    </div>
                  </Link>
                </div>
              </section>

              <h1 className="font-black  md:px-0 px-5 ">
                OEF data CSV Downloads
              </h1>
              <div className="grid md:grid-cols-6 gap-5 px-5 md:px-0 grid-cols-1 mb-2 my-10">
                {/*  **********************************FIRST ROW ************************** */}
                <Link href={`/oef/data-reports/data/hiv_outreach_event`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                        hiv <br /> outreach <br /> events
                      </p>
                    </button>
                  </div>
                </Link>
                <Link href={`/oef/data-reports/data/oef_participant_sign_in_sheet`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                        participant <br /> sign-in <br /> sheets
                      </p>
                    </button>
                  </div>
                </Link>
                <Link href={`/oef/data-reports/data/cab_organizer_survey`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                        cab <br /> organizer <br /> surveys
                      </p>
                    </button>
                  </div>
                </Link>
                <Link href={`/oef/data-reports/data/site_visits`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                        site <br /> visits 
                      </p>
                    </button>
                  </div>
                </Link>
                <Link href={`/oef/data-reports/data/technical_assistance_request`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                        technical <br /> assistance <br /> requests
                      </p>
                    </button>
                  </div>
                </Link>
                
              </div>



              <div className="grid md:grid-cols-6 gap-5 px-5 md:px-0 grid-cols-1 mb-2 my-10">
                {/*  ********************************** SECOND ROW ************************** */}
                <Link href={`/oef/data-reports/data/cbt_facilitator_feedback`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                        cbt <br /> facilitator <br /> feedback
                      </p>
                    </button>
                  </div>
                </Link>
                <Link href={`/oef/data-reports/data/cbt_participant_survey`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                      cbt <br /> participant <br /> feedback
                      </p>
                    </button>
                  </div>
                </Link>
                <Link href={`/#`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center pointer-events-none">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                        cbt <br /> baseline
                      </p>
                    </button>
                  </div>
                </Link>
                <Link href={`/oef/data-reports/data/cbt_quarterly`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                        cbt <br /> quarterly <br/> evaluation 
                      </p>
                    </button>
                  </div>
                </Link>
                
                
              </div>

              <div className="grid md:grid-cols-6 gap-5 px-5 md:px-0 grid-cols-1 mb-2 my-10">
                {/*  ********************************** THIRD ROW ************************** */}
                <Link href={`/oef/data-reports/reports/YipFacilitatorFeedback`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                        yip <br /> facilitator <br /> feedback
                      </p>
                    </button>
                  </div>
                </Link>
                <Link href={`/oef/data-reports/reports/YipParticipantFeedback`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                      yip <br /> participant <br /> feedback
                      </p>
                    </button>
                  </div>
                </Link>
                <Link href={`/oef/data-reports/reports/YipBaseline`}>
                  <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
                    <button id="myBtn" className="flex items-center">
                      <p className=" font-bold text-white uppercase">
                        yip <br /> baseline
                      </p>
                    </button>
                  </div>
                </Link>
                
                
              </div>
            </div>
          </section>
          {/*  <ReportProblem /> */}
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
