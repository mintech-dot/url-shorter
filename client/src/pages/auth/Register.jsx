import InputField from '../../components/ui/InputField';

const Register = () => {
  return (
    <>
      <nav className="pt-6 px-[52px]">
        <div className="flex flex-1">
          <h1 className="text-[37px] font-extrabold bg-gradient-to-r from-brand-primary-pink to-brand-primary-blue bg-clip-text text-transparent">
            Linkly
          </h1>
          <h1 className="text-lite">®</h1>
        </div>
      </nav>

      <section className="flex mx-auto max-w-sm my-8 items-center justify-center bg-grey/90 shadow-3xl rounded-lg border border-grey">
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
              className="bg-brand-primary-blue mx-auto my-4 flex items-center justify-center text-white text-md rounded-lg w-full py-2.5"
            >
              Create an account
            </button>

            <button
              type="button"
              className="mx-auto mb-4 flex items-center justify-center text-white bg-grey border border-[#353C4A] hover:bg-[#353C4A] text-md rounded-lg w-full py-2.5"
            >
              Register with Google
            </button>

            <div className="text-center">
              <p className="text-sm font-medium text-lite">
                Already have an account?{' '}
                <a href="/login" className="text-lite inline-block font-bold text-sm underline">
                  Login in
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
