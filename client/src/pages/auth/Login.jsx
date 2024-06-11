import InputField from "../../components/ui/InputField";

const Login = () => {
  return (
    <>
      <nav className=" pt-6 px-[52px]">
        <div className="flex flex-1">
          <h1 className="text-[37px] font-extrabold bg-gradient-to-r from-brand-primary-pink to-brand-primary-blue bg-clip-text text-transparent">
            Linkly
          </h1>{" "}
          <h1 className="text-lite">®</h1>
        </div>
      </nav>
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
                <a
                  className="ml-auto text-lite inline-block text-sm underline "
                  href=""
                >
                  Forgot your password?
                </a>
              </div>
              <InputField
                type="password"
                id="password"
                placeholder="enter your password"
                required
              />
            </div>

            <button className="bg-brand-primary-blue mx-auto my-4 flex items-center justify-center text-white text-md rounded-lg w-full py-2.5">
              Login
            </button>
            <button className=" mx-auto mb-4 flex items-center justify-center text-white bg-grey border border-[#353C4A] hover:bg-[#353C4A] text-md rounded-lg w-full py-2.5">
              Login with Google
            </button>

            <div className="text-center">
              <p className="text-sm font-medium text-lite">
                Dont have an account?{" "}
                <a className="text-lite inline-block font-bold text-sm underline">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
