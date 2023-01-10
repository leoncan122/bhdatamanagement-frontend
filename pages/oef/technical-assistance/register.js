import React, { useState } from "react";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import Loader from "../../../components/Loader";
import axios from "axios";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputValidationAddress from "../../../components/InputValidationAddress";
import { useRouter } from "next/router";

import TypeOfTARequested from '../../../components/technicalAssistance/TypeOfTARequested'
import ReasonForRequest from '../../../components/technicalAssistance/ReasonForRequest'
import YourContactInformation from '../../../components/technicalAssistance/YourContactInformation'
import FboName from '../../../components/technicalAssistance/FboName'
import Outcome from '../../../components/technicalAssistance/Outcome'
import DateResolved from '../../../components/technicalAssistance/DateResolved'
import Complete from '../../../components/technicalAssistance/Complete'

const RegisterTA = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isNumberKey = (e) => {
    const invalidChars = [
      "-",
      "+",
      "e",
    ];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    } 
}
  const [form, setForm] = useState({
    taType: "",
    taTypeOther: "",
    taReason: "",
    taContactName: "",
    taEmail: "",
    taPhone: "",
    taFbo: "",
    taFboOther: "",
    taDateSubmitted: "",
    taStatus: "",
    taStatusCompleteDate: "",
    taCompleteBhStaff: "",
    taNotesBhStaff: "",
    programId: "",
    programName: "",
  });
  const notifyMessage = () => {
    toast.success("The fbo is being added", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const submitForm = async () => {
    setLoading(!loading)
    await axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`, form)
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setLoading(!loading)
          notifyMessage();
            setTimeout(() => {
              router.push("/oef/fbo");
            }, 1500);
        }
      })
      .catch(function (error) {
        setLoading(!loading)
        setError("An error ocurred, try again");
        console.error("error: ", error);
      });
  };
  const boroughs = [
    "Bronx",
    "Brooklyn",
    "Manhattan",
    "Staten Island",
    "Queens",
  ];
  const handleForm = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

const handleAddress = (value, key) => {
    setForm((prev) => ({ ...prev, key: value }));
}

  console.log(form);
  return (
    <>
      <Layout>
        <ToastContainer autoClose={1500} />
        <PageTopHeading
          pageTitle={"FBO Technical Assistance Request Form- FY 2022-2023"}
          backBtn={true}
          dashboardBtn={true}
        />
        <section className="container mx-auto px-5  md:px-0 rounded-lg border-black pb-10">

            <TypeOfTARequested form={form} setForm={setForm} />

            {/* <TypeOfTARequested/> */}
<ReasonForRequest/>
<YourContactInformation/>
<FboName/>
<Outcome/>
<DateResolved/>
<Complete/>
         
        </section>
        {loading ? (<div className="flex justify-center my-10"> <Loader /></div>  ): ( <div className="flex justify-center my-10">
          <button
            className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
            onClick={submitForm}
          >
            <img
              src="/check-save-and-finish.svg"
              alt="register event icon"
              className="mr-2"
            />
            Save and finish
          </button>
        </div>)}
        
       
      </Layout>
      
    </>
  );
};

export default RegisterTA;

export const getServerSideProps = withPageAuthRequired();

