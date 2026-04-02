import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { _id, title, company } = useLoaderData();

  return (
    <div>
      <h1>Job Details</h1>
      <h2>{title}</h2>
      <h2>{company}</h2>

      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
