import history from "../../assets/icon/history.svg";
import settings from "../../assets/icon/settings.svg";
const Tab = () => {
  return (
    <div className=" flex items-center justify-center gap-[100px] w-full bg-grey mt-6 shadow-2xl">
      <div className="flex gap-2 py-6 focus:border-b-4 focus:border-brand-primary-blue ">
        <img src={history} alt="" />
        <a href="/">
          <h1 className="font-bold text-[15px] text-lite">History</h1>
        </a>
      </div>
      <div className="flex gap-2 py-6 focus:border-b-4 focus:border-brand-primary-blue">
        <img src={settings} alt="" />
        <a href="#">
          <h1 className="font-bold text-[15px] text-lite">Settings</h1>
        </a>{" "}
      </div>
    </div>
  );
};
export default Tab;
