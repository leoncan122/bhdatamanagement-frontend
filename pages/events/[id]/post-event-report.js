import React, { useEffect, useState } from "react";

import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";

import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import axios from "axios"
import ResponseStatusModal from "../../../components/ResponseStatusModal";
import { data } from "autoprefixer";


import PostEventReportSection1 from '../../../components/post-event-report/PostEventReportSection1'
import PostEventReportSection2 from '../../../components/post-event-report/PostEventReportSection2'
import PostEventReportSection3 from '../../../components/post-event-report/PostEventReportSection3'
import PostEventReportSection4 from '../../../components/post-event-report/PostEventReportSection4'
import PostEventReportSection5 from '../../../components/post-event-report/PostEventReportSection5'
import PostEventReportSection6 from '../../../components/post-event-report/PostEventReportSection6'
import PostEventReportSection7 from '../../../components/post-event-report/PostEventReportSection7'
import PostEventReportSection8 from '../../../components/post-event-report/PostEventReportSection8'
import PostEventReportSection9 from '../../../components/post-event-report/PostEventReportSection9'
import PostEventReportSection10 from '../../../components/post-event-report/PostEventReportSection10'

import PostEventReportSection11 from '../../../components/post-event-report/PostEventReportSection11'
import PostEventReportSection12 from '../../../components/post-event-report/PostEventReportSection12'
import PostEventReportSection13 from '../../../components/post-event-report/PostEventReportSection13'
import PostEventReportSection14 from '../../../components/post-event-report/PostEventReportSection14'
import PostEventReportSection15 from '../../../components/post-event-report/PostEventReportSection15'
import PostEventReportSection16 from '../../../components/post-event-report/PostEventReportSection16'
import PostEventReportSection17 from '../../../components/post-event-report/PostEventReportSection17'
import PostEventReportSection18 from '../../../components/post-event-report/PostEventReportSection18'
import PostEventReportSection19 from '../../../components/post-event-report/PostEventReportSection19'
import PostEventReportSection20 from '../../../components/post-event-report/PostEventReportSection20'


import PostEventReportSection21 from '../../../components/post-event-report/PostEventReportSection21'
import PostEventReportSection22 from '../../../components/post-event-report/PostEventReportSection22'
import PostEventReportSection23 from '../../../components/post-event-report/PostEventReportSection23'
import PostEventReportSection24 from '../../../components/post-event-report/PostEventReportSection24'
import PostEventReportSection25 from '../../../components/post-event-report/PostEventReportSection25'
import PostEventReportSection26 from '../../../components/post-event-report/PostEventReportSection26'
import PostEventReportSection27 from '../../../components/post-event-report/PostEventReportSection27'
import PostEventReportSection28 from '../../../components/post-event-report/PostEventReportSection28'
import PostEventReportSection29 from '../../../components/post-event-report/PostEventReportSection29'
import PostEventReportSection30 from '../../../components/post-event-report/PostEventReportSection30'


import PostEventReportSection31 from '../../../components/post-event-report/PostEventReportSection31'
import PostEventReportSection32 from '../../../components/post-event-report/PostEventReportSection32'
import PostEventReportSection33 from '../../../components/post-event-report/PostEventReportSection33'
import PostEventReportSection34 from '../../../components/post-event-report/PostEventReportSection34'
import PostEventReportSection35 from '../../../components/post-event-report/PostEventReportSection35'
import PostEventReportSection36 from '../../../components/post-event-report/PostEventReportSection36'
import PostEventReportSection37 from '../../../components/post-event-report/PostEventReportSection37'
import PostEventReportSection38 from '../../../components/post-event-report/PostEventReportSection38'
import PostEventReportSection39 from '../../../components/post-event-report/PostEventReportSection39'
import PostEventReportSection40 from '../../../components/post-event-report/PostEventReportSection40'

import PostEventReportSection41 from '../../../components/post-event-report/PostEventReportSection41'
import PostEventReportSection42 from '../../../components/post-event-report/PostEventReportSection42'
import PostEventReportSection43 from '../../../components/post-event-report/PostEventReportSection43'
import PostEventReportSection44 from '../../../components/post-event-report/PostEventReportSection44'
import PostEventReportSection45 from '../../../components/post-event-report/PostEventReportSection45'

const PostEventReport = ({event,programs,locationTypes, areasOfFocus, eventTypes}) => {
  const { user, error, isLoading } = useUser();
  const [showResponseStatus, setShowResponseStatus] = useState(false)
  const [responseStatus, setResponseStatus] = useState ({})
  const [eventForm, setEventForm] = useState({
    userID: "",
    eventDateCreated: new Date(),
    programID: "",
    programName: "",
    eventName: "",
    eventDate: "",
    eventStartTime: "",
    eventFinishTime: "",
    eventLocationTypeID: "",
    eventLocationTypeName: "",
    // eventZipCode: "",
    healthAreaOfFocusID: "",
    healthAreaOfFocusName: "",
    eventTypeID: "",
    eventTypeName: "",
  });
  const userId = user && user.sub
  
  useEffect(() => {
    setEventForm({...eventForm, userID: userId})
  }, [userId])

  
  
  
  const submitPostEventForm = async () => {
 
    const isEmpty = Object.values(eventForm).some(value => !value)
    
    if (!isEmpty) {
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/events`, eventForm)
        .then(response => {
            if (response.data.statusText==='OK') {
              setResponseStatus({ success: true, statusMessage: "Your Event has been saved"})
              setShowResponseStatus(!showResponseStatus)
            } 
        })
        .catch(function (error) {
            setResponseStatus({ success: false, statusMessage: "Request Failed"})
            setShowResponseStatus(!showResponseStatus)
            console.error("error: ", error)
    });
    } else {
      setResponseStatus({ success: false, statusMessage: "Please complete all the fields"})
      setShowResponseStatus(!showResponseStatus)
    }
  }
  


  return (
    <>
    <Layout>
      <PageTopHeading
        backBtn={true}
        dashboardBtn={true}
        pageTitle={"Post event report"}
      />
      <div className="container mx-auto md:px-0 px-5  items-center">
        <div className="post-envent-form-container  grid gap-1 bg-white border-dark-violet rounded-lg p-1 my-10 shadow-lg">
        <p>id:{event.id}</p>
        <p>event name: {event.eventname}</p>
        <PostEventReportSection1/>
        <PostEventReportSection2/>
        <PostEventReportSection3/>
        <PostEventReportSection4/>
        <PostEventReportSection5/>
        <PostEventReportSection6/>
        <PostEventReportSection7/>
        <PostEventReportSection8/>
        <PostEventReportSection9/>
        <PostEventReportSection10/>

        <PostEventReportSection11/>
        <PostEventReportSection12/>
        <PostEventReportSection13/>
        <PostEventReportSection14/>
        <PostEventReportSection15/>
        <PostEventReportSection16/>
        <PostEventReportSection17/>
        <PostEventReportSection18/>
        <PostEventReportSection19/>
        <PostEventReportSection20/>

        <PostEventReportSection21/>
        <PostEventReportSection22/>
        <PostEventReportSection23/>
        <PostEventReportSection24/>
        <PostEventReportSection25/>
        <PostEventReportSection26/>
        <PostEventReportSection27/>
        <PostEventReportSection28/>
        <PostEventReportSection29/>
        <PostEventReportSection30/>

        <PostEventReportSection31/>
        <PostEventReportSection32/>
        <PostEventReportSection33/>
        <PostEventReportSection34/>
        <PostEventReportSection35/>
        <PostEventReportSection36/>
        <PostEventReportSection37/>
        <PostEventReportSection38/>
        <PostEventReportSection39/>
        <PostEventReportSection40/>

        <PostEventReportSection41/>
        <PostEventReportSection42/>
        <PostEventReportSection43/>
        <PostEventReportSection44/>
        <PostEventReportSection45/>
        

        </div>
        <button className="py-2 px-5 flex items-center rounded bg-violet text-white font-semibold" onClick={submitPostEventForm}>
            <img src="/check-save-and-finish.svg" alt="register event icon" className="mr-2"/>
            Save event report
        </button>
      </div>    
    </Layout>
    {showResponseStatus && <ResponseStatusModal setShowResponseStatus={setShowResponseStatus} responseStatus={responseStatus}/>}
    </>
  );
};

export default PostEventReport;

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
      const {id}=ctx.params
      const [event,programs, locationTypes, areasOfFocus, eventTypes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`)
        .then((r) =>r.json())
        .then(response=>response[0]),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/programs`).then((r) =>
          r.json()
        ),
        
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_location_type`).then((r) =>
          r.json()
        ),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/health_area_of_focus`).then((r) =>
          r.json()
        ),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_type`).then((r) =>
          r.json()
        ),

      ]);
      return { props: {event:event, programs: programs, locationTypes:locationTypes, areasOfFocus:areasOfFocus, eventTypes: eventTypes } };
  
    },
  });

