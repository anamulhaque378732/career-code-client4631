import { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);

  return (
    <div className="my-10">
      <h3 className="text-3xl"> {applications.length}</h3>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {applications &&
                applications.map((application, index) => (
                  <JobApplicationRow
                    index={index}
                    key={application._id}
                    application={application}
                  ></JobApplicationRow>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationList;
