import history from "../../assets/icon/history.svg";
import exit from "../../assets/icon/exit.svg";
import { Link } from "react-router-dom";
const Tab = () => {
  return (
    <div className=" flex items-center justify-center gap-[100px] w-full bg-grey mt-6 shadow-2xl">
      <Link to="/dashboard">
        <div className="flex gap-2 py-6 focus:border-b-4 focus:border-brand-primary-blue ">
          <img src={history} alt="" />
          <h1 className="font-bold text-[15px] text-lite">History</h1>
        </div>
      </Link>
      <Link to="/">
        <div className="flex gap-2 py-6 focus:border-b-4 focus:border-brand-primary-blue">
          <img src={exit} alt="" />
          <h1 className="font-bold text-[15px] text-lite">Logout</h1>
        </div>
      </Link>{" "}
    </div>
  );
};
export default Tab;
