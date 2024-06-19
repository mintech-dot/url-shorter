import Input from "./ui/ShorterInput";
import Table from "./ui/Table";
const Hero = () => {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Short Link", accessor: "link" },
    { header: "Original Link", accessor: "original" },
    { header: "Clicks", accessor: "clicks" },
    { header: "Status", accessor: "status" },
    { header: "Date", accessor: "date" },
  ];

  const data = [
    {
      id: "1",
      link: "https://linkly.com/Bn41aCOlnxj",
      original: "https://github.com/mintech-dot/Laravel-electronjs-linux",
      clicks: 10,
      status: "active",
      date: "21/04/2024",
    },
    {
      id: "2",
      link: "https://linkly.com/Bn41aCOlnxj",
      original: "https://www.linkedin.com/in/sobhi-raid/",
      clicks: 10,
      status: "inactive",
      date: "21/04/2024",
    },
    {
      id: "3",
      link: "https://linkly.com/Bn41aCOlnxj",
      original: "https://x.com/raid_sobhi",
      clicks: 10,
      status: "active",
      date: "21/04/2024",
    },
    {
      id: "4",
      link: "https://linkly.com/Bn41aCOlnxj",
      original: "0x4.medium.com",
      clicks: 10,
      status: "inactive",
      date: "21/04/2024",
    },
    {
      id: "5",
      link: "https://linkly.com/Bn41aCOlnxj",
      original: "0x4.medium.com",
      clicks: 10,
      status: "active",
      date: "21/04/2024",
    },
  ];
  return (
    <section className="text-center pt-[65px] md:pt-[130px]  ">
      <div className="flex flex-col items-center">
        <h1 className="text-center font-inter font-extrabold text-[35px] md:text-[45px] lg:text-[60px] leading-[40px] md:leading-[60px]  bg-gradient-to-r from-brand-primary-blue from-0% via-brand-primary-pink via-19%  to-brand-primary-blue to-100% bg-clip-text text-transparent">
          Shorten Your Loooong Links :)
        </h1>

        <p className="pt-[20px] pb-[24px] md:pb-[40px]  text-center font-inter font-light text-[16px] leading-[26px] mx-[20px] md:w-[650px] text-lite">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
      </div>

      <div className="grid place-items-center mx-4">
        <Input />
        <p className=" pt-[8px]  text-center font-inter font-light text-[14px] leading-[26px] mx-[20px] md:w-[650px] text-lite">
          You can create unlimited links. Register Now to enjoy Unlimited usage
        </p>
      </div>

      <div className="container mx-auto py-[40px] md:py-[60px] ">
        <Table columns={columns} data={data} />
      </div>
    </section>
  );
};

export default Hero;
