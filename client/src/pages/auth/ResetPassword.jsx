import InputField from "../../components/ui/InputField";
import { Link } from "react-router-dom";
import Linkly from "../../components/ui/Linkly-logo";
const ResetPassword = () => {
  return (
    <>
      <Linkly />
      <section className="flex items-center justify-center">
      <div className="flex  mx-[26px] max-w-sm my-32 items-center justify-center bg-grey/90 shadow-3xl  rounded-lg border border-grey ">
        <div className="p-6 ">
          <h1 className=" text-2xl text-lite font-semibold text-center">
            Reset your password
          </h1>
          <h2 className="text-sm text-lite pt-2 pb-6 text-center ">
            Enter the email address associated with your account and we will
            send you a link to reset your password.{" "}
          </h2>
          <form action="">
            <div >
            <InputField
              type="email"
              id="email"
              placeholder="m@example.com"
              required
            />
            </div>
            <Link to="/verify-email">
            <button type="submit" className="bg-brand-primary-blue mx-auto hover:bg-brand-primary-blue/75 mb-4 flex items-center justify-center text-white text-md rounded-lg w-full py-2.5">
              Continue
            </button>
            </Link>

            <div className="text-center">
              <p className="text-sm font-medium text-lite">
                Dont have an account?{" "}
                <Link to="/register">
                <a className="text-lite inline-block font-bold text-sm underline pl-2">
                  Sign Up
                </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      </section>
    </>
  );
};

export default ResetPassword;
