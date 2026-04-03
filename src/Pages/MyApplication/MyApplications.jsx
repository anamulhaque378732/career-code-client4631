import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationsStats from "./ApplicationsStats";
import UseAuth from "../../hooks/UseAuth";
import { myApplicationPromise } from "../../Api/ApplicationApi";

const MyApplications = () => {
  const { user } = UseAuth();

  return (
    <div>
      <h1 className="text-5xl my-10 font-bold text-center"> My Application</h1>
      <div>
        <ApplicationsStats></ApplicationsStats>
        <Suspense fallback={"loading your application"}>
          <ApplicationList
            myApplicationPromise={myApplicationPromise(user.email)}
          ></ApplicationList>
        </Suspense>
      </div>
    </div>
  );
};

export default MyApplications;
