import verify from "../../assets/icon/verify.svg";
const VerifyEmail = () => {
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
        <section className="flex  mx-auto max-w-md my-16 items-center justify-center bg-grey/90 shadow-3xl  rounded-lg border border-grey ">
          <div className="p-6 ">
            <img src={verify} alt="verify icon" className="mx-auto pb-4 w-[260px]" />
            <h1 className=" text-2xl text-lite font-semibold text-center">
              Reset your password
            </h1>
            <h2 className="text-sm text-lite pt-2 pb-6 text-center ">
            Thank you, check your email for instructions to reset your password
            </h2>
            
  
              <button className="bg-brand-primary-blue mx-auto my-2 mb-4 flex items-center justify-center text-white font-bold text-md rounded-lg w-full py-2.5">
                Skip now
              </button>
  
              <div className="text-center">
                <p className="text-sm font-medium text-lite">
                  Dont have an account?{" "}
                  <a className="text-lite inline-block font-bold text-sm underline pl-2">
                    Sign Up
                  </a>
                </p>
              </div>
          </div>
        </section>
      </>
    );
  };
  
  
export default VerifyEmail;
  