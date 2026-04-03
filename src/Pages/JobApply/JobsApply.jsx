import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobsApply = () => {
  const { id: jobId } = useParams();

  const { user } = UseAuth();

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:5000/applications", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your  application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-5xl p-2 text-center lg:my-10 md:py-5 py-2">
        Apply for this job
        <Link className="btn text-xl hover:bg-primary" to={`/jobs/${jobId}`}>
          Details
        </Link>
      </h1>

      <form onSubmit={handleApplyFormSubmit} className="py-10   mx-auto">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box mx-auto  w-md border p-4">
          <label className="label"> LinkedIn link</label>
          <input
            required
            name="linkedIn"
            type="url"
            className="input w-full"
            placeholder="LinkedIn profile link"
          />

          <label className="label">Github link</label>
          <input
            required
            name="github"
            type="url"
            className="input w-full"
            placeholder=" Github profile link"
          />

          <label className="label">Resume</label>
          <input
            required
            name="resume"
            type="url"
            className="input w-full"
            placeholder="Resume link"
          />
          <input
            type="submit"
            className="btn text-xl my-2 hover:bg-secondary"
            value="Apply"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default JobsApply;
