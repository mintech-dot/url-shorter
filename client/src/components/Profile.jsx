const Profile = () => {
  return (
    <section className="flex  mx-auto max-w-md my-8 items-center justify-center bg-grey/90 shadow-3xl  rounded-lg border border-grey ">
      <div className="p-8 ">
        <h1 className=" text-2xl text-lite font-semibold text-center">
          Sobhi Raid
        </h1>
        <h2 className="text-md text-lite pt-2 pb-6 text-center">
          Welcome to your profile{" "}
        </h2>
        <form action="">
          <div className="pb-2">
            <label className="text-sm font-medium text-lite" htmlFor="Email">
              Full Name
            </label>
            <input
              type="text"
              disabled className="mx-auto px-2.5 py-2.5 w-full border text-black block border-lite rounded-lg mt-2 mb-4"
              value="Sobhi Raid"
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

          <button className="bg-brand-primary-blue hover:bg-brand-primary-blue/75 mx-auto my-4 flex items-center justify-center text-white text-md rounded-lg w-full py-2.5">
            Update
          </button>
          <button className=" mx-auto mb-4 flex items-center justify-center text-white bg-brand-primary-pink  hover:bg-brand-primary-pink/90 text-md rounded-lg w-full py-2.5">
            Delete Your Account
          </button>
          
        </form>
      </div>
    </section>
  );
};

export default Profile;
