import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { _id, title, company } = useLoaderData();

  return (
    <div className="mb-10">
      <h1 className="text-4xl text-center font-bold my-2">
        Job Details : {title}
      </h1>
      <h2 className="text-2xl font-medium my-3 p-2">{title}</h2>
      <h2 className="my-2 text-xl p-2">{company}</h2>

      <Link className="my-4 p-3" to={`/jobApply/${_id}`}>
        <button className="btn btn-primary my-2 ">Apply now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
