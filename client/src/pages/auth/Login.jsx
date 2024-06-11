const Login = () => {
  return (
    <section className="flex  mx-auto max-w-sm my-24 items-center justify-center bg-grey/90 shadow-3xl  rounded-lg border border-grey ">
      <div className="p-8 ">
        <h1 className=" text-2xl text-lite font-semibold ">Login</h1>
        <h2 className="text-sm text-lite py-2 ">
          Enter your email below to login to your account
        </h2>
        <form action="">
          <div className="pb-2">
            <label className="text-sm font-medium text-lite" htmlFor="Email">
              Email
            </label>
            <input
              type="text"
              className="mx-auto px-2.5 py-2.5 w-full border border-lite rounded-lg my-2 mb-3"
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
                className="ml-auto text-lite inline-block text-sm underline"
                href=""
              >
                Forgot your password?
              </a>
            </div>
            <input
              type="password"
              className="mx-auto px-2.5 py-2.5 w-full border border-lite rounded-lg my-2"
              placeholder=""
              required
            />
          </div>

          <button className="bg-brand-primary-blue mx-auto my-4 flex items-center justify-center text-white text-md rounded-lg w-full py-2.5">
            Login
          </button>
          <button className=" mx-auto my-4 flex items-center justify-center text-white bg-grey border border-[#353C4A] hover:bg-[#353C4A] text-md rounded-lg w-full py-2.5">
            Login with Google
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
