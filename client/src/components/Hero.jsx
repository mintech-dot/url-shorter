import Input from "./ui/Input";
const Hero = () => {
  return (
    <section className="text-center pt-[130px] ">
      <div className="flex flex-col items-center">
        <h1 className="text-center font-inter font-extrabold text-[60px] leading-80  bg-gradient-to-r from-brand-primary-blue from-0% via-brand-primary-pink via-19%  to-brand-primary-blue to-100% bg-clip-text text-transparent">
          Shorten Your Loooong Links :)
        </h1>

        <p className="pt-[20px] pb-[40px]  text-center font-inter font-light text-[16px] leading-[26px] w-[650px] text-lite">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
      </div>

      <div className="grid place-items-center ">
        <Input />
      </div>
    </section>
  );
};

export default Hero;
