const ResetPassword = () => {
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
      <section className="flex  mx-auto max-w-sm my-32 items-center justify-center bg-grey/90 shadow-3xl  rounded-lg border border-grey ">
        <div className="p-6 ">
          <h1 className=" text-2xl text-lite font-semibold text-center">
            Reset your password
          </h1>
          <h2 className="text-sm text-lite pt-2 pb-6 text-center ">
            Enter the email address associated with your account and we will
            send you a link to reset your password.{" "}
          </h2>
          <form action="">
            <div className="pb-2">
              <input
                type="text"
                className="mx-auto px-2.5 py-2.5 w-full border border-lite rounded-lg mt-2 "
                placeholder="m@example.com"
                required
              />
            </div>

            <button className="bg-brand-primary-blue mx-auto my-2 mb-4 flex items-center justify-center text-white text-md rounded-lg w-full py-2.5">
              Continue
            </button>

            <div className="text-center">
              <p className="text-sm font-medium text-lite">
                Dont have an account?{" "}
                <a className="text-lite inline-block font-bold text-sm underline pl-2">
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

export default ResetPassword;
