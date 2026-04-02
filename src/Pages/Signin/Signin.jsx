import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";

const Signin = () => {
  const { signinUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSignin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signinUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <SocialLogin from={from}></SocialLogin>
            <h1 className="text-5xl font-bold">Login Now!</h1>
            <form onSubmit={handleSignin} className="fieldset">
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
              <button className="btn btn-neutral mt-4"> Sign in</button>
            </form>
            <h1 className=" font-medium ">
              First time this website please register
              <Link to="/register" className=" ml-2 btn text-red-700">
                Register
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
