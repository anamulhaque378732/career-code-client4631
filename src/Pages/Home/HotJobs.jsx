import React, { useEffect, useState } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobsPromise.then((data) => {
      setJobs(data);
    });
  }, [jobsPromise]);
  return (
    <div>
      <div>
        <h1 className="text-5xl text-center font-bold my-10">Hot jobs</h1>
      </div>
      <div className="grid  gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto justify-between text-center items-center">
        {jobs &&
          jobs.map((job) => <JobsCard key={job._id} job={job}></JobsCard>)}
      </div>
    </div>
  );
};

export default HotJobs;
