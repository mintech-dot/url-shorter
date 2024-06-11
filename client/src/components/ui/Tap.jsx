import history from "../../assets/icon/history.svg";
import exit from "../../assets/icon/exit.svg";
import { Link } from 'react-router-dom';
const Tab = () => {
  return (
    <div className=" flex items-center justify-center gap-[100px] w-full bg-grey mt-6 shadow-2xl">
      <div className="flex gap-2 py-6 focus:border-b-4 focus:border-brand-primary-blue ">
        <Link to="/dashboard">
          <img src={history} alt="" />
          <h1 className="font-bold text-[15px] text-lite">History</h1>
        </Link>
      </div>
      <div className="flex gap-2 py-6 focus:border-b-4 focus:border-brand-primary-blue">
        <Link to="/">
          <img src={exit} alt="" />
          <h1 className="font-bold text-[15px] text-lite">Logout</h1>
        </Link>{" "}
      </div>
    </div>
  );
};
export default Tab;
