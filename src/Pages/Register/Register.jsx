import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // createUser

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <SocialLogin></SocialLogin>
              <h1 className="text-5xl font-bold"> Register now</h1>
              <form onSubmit={handleRegister} className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
              <h1 className=" font-medium">
                Already have an account please
                <Link to="/signin" className=" btn text-green-700 ml-2">
                  Sign in
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
