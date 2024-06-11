const Register = () => {
  return (
    <section className="flex  mx-auto max-w-sm my-24 items-center justify-center bg-grey/90 shadow-3xl  rounded-lg border border-grey ">
      <div className="p-8 ">
        <h1 className=" text-2xl text-lite font-semibold ">Sign Up</h1>
        <h2 className="text-sm text-lite pt-2 pb-6 ">
          Enter your information to create an account{" "}
        </h2>
        <form action="">
          <div className="pb-2">
            <label className="text-sm font-medium text-lite" htmlFor="Email">
              Full Name
            </label>
            <input
              type="text"
              className="mx-auto px-2.5 py-2.5 w-full border border-lite rounded-lg mt-2 mb-4"
              placeholder="Nicolas Brown"
              required
            />
            <label className="text-sm font-medium text-lite" htmlFor="Email">
              Email
            </label>
            <input
              type="text"
              className="mx-auto px-2.5 py-2.5 w-full border border-lite rounded-lg mt-2 mb-4"
              placeholder="m@example.com"
              required
            />
            <label className="text-sm font-medium text-lite" htmlFor="Password">
              Password
            </label>{" "}
            <input
              type="password"
              className="mx-auto px-2.5 py-2.5 w-full border border-lite rounded-lg mt-2 mb-4"
              placeholder=""
              required
            />
          </div>

          <button className="bg-brand-primary-blue mx-auto my-4 flex items-center justify-center text-white text-md rounded-lg w-full py-2.5">
            Create an account
          </button>
          <button className=" mx-auto mb-4 flex items-center justify-center text-white bg-grey border border-[#353C4A] hover:bg-[#353C4A] text-md rounded-lg w-full py-2.5">
            Register with Google
          </button>

          <div className="text-center">
            <p className="text-sm font-medium text-lite">
            Already have an account?
              <a className="text-lite inline-block font-bold text-sm underline">
                Login in
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
