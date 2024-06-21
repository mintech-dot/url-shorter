import PropTypes from "prop-types";
import activelink from "../../assets/icon/active-link.svg";
import inactivelink from "../../assets/icon/inactive-link.svg";
import editIcon from "../../assets/icon/edit.svg";
import deleteIcon from "../../assets/icon/delete.svg";
import CopyTextButton from "./CopyTextButton";
const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto mx-[26px] xl:mx-[153px] rounded-lg ">
      <table className="min-w-full divide-y divide-grey  shadow-xl">
        <thead className="bg-grey ">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                scope="col"
                className="px-6 py-3 text-left text-[15px] font-bold text-lite "
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-black/90  divide-y-4 divide-grey ">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="px-6 py-[14px] whitespace-nowrap text-sm text-lite"
                >
                  {column.accessor === "link" ? (
                    <div className="flex items-center  ">
                      {row[column.accessor]}{" "}
                      <CopyTextButton text={row[column.accessor]} />
                    </div>
                  ) : column.accessor === "status" &&
                    row[column.accessor] === "active" ? (
                    <div className="flex items-center text-[#1EB036]  ">
                      {row[column.accessor]}{" "}
                      <img
                        src={activelink}
                        alt="active icon"
                        className="ml-[24px] cursor-pointer"
                      />
                    </div>
                  ) : column.accessor === "status" &&
                    row[column.accessor] === "inactive" ? (
                    <div className="flex items-center text-[#B0901E]  ">
                      {row[column.accessor]}{" "}
                      <img
                        src={inactivelink}
                        alt="inactive icon"
                        className="ml-3 cursor-pointer"
                      />
                    </div>
                  ) : column.accessor === "action" ? (
                    <div className="flex items-start  ">
                      {row[column.accessor]}{" "}
                      <img
                        src={deleteIcon}
                        alt="delete icon"
                        className=" cursor-pointer"
                      />
                      <img
                        src={editIcon}
                        alt="edit icon"
                        className=" cursor-pointer mr-24 "
                      />
                    </div>
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
