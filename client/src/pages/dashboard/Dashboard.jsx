import UserNavbar from "../../components/UserNavbar";
import Tap from "../../components/ui/Tap";
import Table from "../../components/ui/Table";
import Profile from "../../components/Profile";
const Dashboard = () => {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Short Link", accessor: "link" },
    { header: "Original Link", accessor: "original" },
    { header: "Clicks", accessor: "clicks" },
    { header: "Status", accessor: "status" },
    { header: "Date", accessor: "date" },
    { header: "Action", accessor: "action" },

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
    <div>
      <UserNavbar />
      <Tap />
      <div>
        <Profile />
        <Table columns={columns} data={data} />
      </div>

    </div>
  );
};

export default Dashboard;
