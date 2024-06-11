import { Link } from "react-router-dom";
const Linkly = () => {
    return (
        <nav className=" pt-6 px-[52px]">
        <div className="flex flex-1">
          <Link to="/">
          <a className="text-[37px] font-extrabold bg-gradient-to-r from-brand-primary-pink to-brand-primary-blue bg-clip-text text-transparent">
            Linkly
          </a>{" "}
          </Link>
          <h1 className="text-lite">®</h1>
        </div>
      </nav>
    )

}

export default Linkly