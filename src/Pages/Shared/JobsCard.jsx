import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    title,
    location,
    _id,
    description,
    requirements,
    company_logo,
    company,
    salaryRange,
  } = job;

  return (
    <div className="card bg-base-100 py-6 px-2 m-2  w-96  shadow-sm">
      <div className="flex gap-4">
        <figure>
          <img className="w-16" src={company_logo} alt="Company logo" />
        </figure>
        <div>
          <h3 className="text-4xl"> {company}</h3>
          <p className="flex gap-1 items-center">
            <CiLocationOn className="text-xl   "></CiLocationOn> {location}{" "}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-left">{description}</p>
        <p className="text-left">
          Salary : {salaryRange.min} - {salaryRange.max} bdt{" "}
        </p>

        <div className="card-actions ">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="card-actions justify-end">
        <Link to={`/jobs/${_id}`}>
          <button className="btn btn-primary"> Show details</button>
        </Link>
      </div>
    </div>
  );
};

export default JobsCard;
