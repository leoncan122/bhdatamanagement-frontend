import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import CSVHIVOutreachParticipantSignInSheet from "../../../../components/csv-reports/CSVHIVOutreachParticipantSignInSheet";
import QuarterlyCsv from "../../../../components/csv-reports/QuarterlyCsv";

const quarterlyContractorReport = ({ cbtCSV, siteVisitsCSV, TACSV }) => {
  // console.log("siteVisitsCSV", siteVisitsCSV);
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });

  const [download, setDownload] = useState(false);
  const [selectedCbtCSV, setSelectedCbtCSV] = useState([]);
  const [selectedTACSV, setSelectedTACSV] = useState([]);
  const [selectedSiteVisitCSV, setSelectedSiteVisitCSV] = useState([]);

  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  useEffect(() => {
    const cerohoursDate = new Date(selectedDate.start).setHours(0);
    // console.log("selectedDate", selectedDate);
    const selectReportsInDateRange = (reports) =>
      reports.filter((report) => {
        const start = new Date(new Date(selectedDate.start).setHours(0));
        const end = new Date(new Date(selectedDate.finish).setHours(23));
        const eventdate = new Date(report?.eventDate || report?.activityDate);
        // console.log("start", start)
        // console.log("end", end)
        // console.log("eventdate", eventdate)
        // console.log(eventdate >= start && eventdate <= end);
        return eventdate >= start && eventdate <= end;
      });
    const cbt = selectReportsInDateRange(cbtCSV);
    const siteVisits = selectReportsInDateRange(siteVisitsCSV);
    const technicalAssitance = selectReportsInDateRange(TACSV)
    setSelectedCbtCSV(cbt);
    setSelectedSiteVisitCSV(siteVisits);
    setSelectedTACSV(technicalAssitance)
  }, [selectedDate]);

  console.log("selected", selectedSiteVisitCSV);

  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Download Quarterly Report Subcontractor CSV Data"}
        backBtn={true}
        dashboardBtn={true}
      />
      <section className="container mx-auto px-5 md:px-0 pb-10">
        <p className="font-bold text-xl">Choose the data range:</p>
        <div className="grid md:flex md:flex-row my-7 gap-7">
          <div className="grid grid-cols-1 gap-5">
            <label className="border-black p-5 flex justify-between">
              Start date:
              <input
                type="date"
                onChange={(e) => {
                  // console.log(new Date(e.target.value))

                  setSelectedDate({ ...selectedDate, start: e.target.value });
                }}
              />
            </label>
            <label className="border-black p-5 flex justify-between">
              Finish date:
              <input
                type="date"
                onChange={(e) => {
                  // console.log(new Date(new Date(e.target.value).toLocaleString("en-US", {timeZone: "America/New_York"})).setHours(0), "new date")
                  setSelectedDate({ ...selectedDate, finish: e.target.value });
                }}
              />
            </label>
          </div>
          {selectedCbtCSV && selectedTechnicallAssistanceCSV && (
            <>
              <div>
              <button
                onClick={() => setDownload(true)}
                className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase"
              >
                Download <br /> all <br /> datasets
              </button>
              </div>
              <QuarterlyCsv
                csvData={selectedCbtCSV}
                headers={Object.keys(cbtCSV[0])}
                fileName={`OEF_CBT_Data_Quarterly_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="CBT"
                download={{state:download, set: setDownload}}
              />
              <QuarterlyCsv
                csvData={selectedSiteVisitCSV}
                headers={Object.keys(siteVisitsCSV[0])}
                fileName={`OEF_Site Visit_Data_Quarterly_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="Site Visit"
                download={{state:download, set: setDownload}}

              />
              <QuarterlyCsv
                csvData={selectedTACSV}
                headers={Object.keys(TACSV[0])}
                fileName={`OEF_Technical_Assistance_Data_Quarterly_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="Technical Assistance"
                download={{state:download, set: setDownload}}

              />
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default quarterlyContractorReport;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const [cbtCSV, siteVisitsCSV, TACSV] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/cbt_report_contractor`
      ).then((r) => r.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/sv_report_contractor`
      ).then((r) => r.json()),
    ]);

    return {
      props: {
        cbtCSV: cbtCSV,
        siteVisitsCSV: siteVisitsCSV,
        TACSV:TACSV
      },
    };
  },
});
