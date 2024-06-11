import InputField from "../../components/ui/InputField";
import { Link } from "react-router-dom";
import Linkly from "../../components/ui/Linkly-logo";
const Login = () => {
  return (
    <>
     <Linkly />
      <section className="flex  mx-auto max-w-sm my-20 items-center justify-center bg-grey/90 shadow-3xl  rounded-lg border border-grey ">
        <div className="p-8 ">
          <h1 className=" text-2xl text-lite font-semibold ">Login</h1>
          <h2 className="text-sm text-lite pt-2 pb-6 ">
            Enter your email below to login to your account
          </h2>
          <form action="">
            <div className="pb-2">
              <InputField
                label="Email"
                type="email"
                id="email"
                placeholder="m@example.com"
                required
              />
              <div className="flex justify-between ">
                <label
                  className="text-sm font-medium text-lite"
                  htmlFor="Password"
                >
                  Password
                </label>{" "}
                <Link to="/reset-password">
                <a
                  className="ml-auto text-lite inline-block text-sm underline "
                  href=""
                >
                  Forgot your password?
                </a>
                </Link>
              </div>
              <InputField
                type="password"
                id="password"
                placeholder="enter your password"
                required
              />
            </div>
            <Link to="/dashboard">
            <button className="bg-brand-primary-blue mx-auto my-4 flex items-center justify-center text-white text-md rounded-lg w-full py-2.5">
              Login
            </button>
            </Link>
            <button className=" mx-auto mb-4 flex items-center justify-center text-white bg-grey border border-[#353C4A] hover:bg-[#353C4A] text-md rounded-lg w-full py-2.5">
              Login with Google
            </button>

            <div className="text-center">
              <p className="text-sm font-medium text-lite">
                Dont have an account?{" "}
                <Link to="/register">
                <a className="text-lite inline-block font-bold text-sm underline">
                  Sign Up
                </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
