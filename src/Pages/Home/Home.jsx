import { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  const jobsPromise = fetch("http://localhost:5000/jobs").then((res) => {
    return res.json();
  });

  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={"loading hot jobs"}>
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
