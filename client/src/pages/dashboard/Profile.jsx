import InputField from "../../components/ui/InputField";
import UserNavbar from "../../components/UserNavbar";
import Tap from "../../components/ui/Tap";
const Profile = () => {
  return (
    <>
      <UserNavbar />
      <Tap />
      <section className="flex  mx-auto max-w-md my-8 items-center justify-center bg-grey/90 shadow-3xl  rounded-xl border border-grey ">
        <div className="p-8 ">
          <h1 className=" text-2xl text-lite font-semibold text-center">
            Sobhi Raid
          </h1>
          <h2 className="text-md text-lite pt-2 pb-6 text-center">
            Welcome to your profile{" "}
          </h2>
          <form action="">
            <div className="pb-2">
              <InputField
                label="Full Name"
                type="email"
                id="email"
                value="Sobhi Raid"
                placeholder="m@example.com"
                required
                disabled
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
                placeholder="reset your password"
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
    </>
  );
};

export default Profile;
