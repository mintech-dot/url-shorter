import { Link } from "react-router-dom";
import InputField from "../../components/ui/InputField";
import Linkly from "../../components/ui/Linkly-logo";
const Register = () => {
  return (
    <>
      <Linkly />
      <section className="flex items-center justify-center">
        <div className="flex mx-[26px] max-w-sm my-8 items-center justify-center bg-grey/90 shadow-3xl rounded-lg border border-grey">
          <div className="p-8">
            <h1 className="text-2xl text-lite font-semibold">Sign Up</h1>
            <h2 className="text-sm text-lite pt-2 pb-6">
              Enter your information to create an account
            </h2>

            <form>
              <InputField
                label="Full Name"
                type="text"
                id="fullName"
                placeholder="Nicolas Brown"
                required
              />
              <InputField
                label="Email"
                type="email"
                id="email"
                placeholder="m@example.com"
                required
              />
              <InputField
                label="Password"
                type="password"
                id="password"
                placeholder=""
                required
              />

              <button
                type="submit"
                className="bg-brand-primary-blue hover:bg-brand-primary-blue/75 mx-auto my-4 flex items-center justify-center text-white text-md rounded-lg w-full py-2.5"
              >
                Create an account
              </button>

              <button
                type="submit"
                className="mx-auto mb-4 flex items-center justify-center text-white bg-grey border border-[#353C4A] hover:bg-[#353C4A] text-md rounded-lg w-full py-2.5"
              >
                Register with Google
              </button>

              <div className="text-center">
                <p className="text-sm font-medium text-lite">
                  Already have an account?{" "}
                  <Link to="/login">
                    <h1 className="text-lite inline-block font-bold text-sm underline">
                      Login in
                    </h1>
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

export default Register;
