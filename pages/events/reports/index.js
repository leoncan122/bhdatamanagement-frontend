import React from "react";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import Link from "next/link";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
const CreateReport = () => {
  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle="Data and reports"
        dashboardBtn={true}
        backBtn={true}
      />
      <div className="container mx-auto">
        <div>
          <section className="grid md:grid-cols-6 grid-cols-1 gap-5 mb-2 px-5 md:px-0 my-10">
            <Link href="/events/reports/nysReportPage">
              <button className="bg-black text-white p-5 rounded mb-5">
                NYS CMP dataset
              </button>
            </Link>
            <Link href="/events/reports/nysMonthlyReport">
              <button className="bg-black text-white p-5 rounded mb-5">
                Data and charts for monthly NYS CMP report
              </button>
            </Link>
            {/* <Link href="/events/reports/nysParticipantSurveyReport">
              <button className="bg-black text-white p-5 rounded mb-5">
                NYS CMP Participant Survey dataset
              </button>
            </Link> */}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CreateReport;

export const getServerSideProps = withPageAuthRequired({});
