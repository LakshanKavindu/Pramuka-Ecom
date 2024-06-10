import SellingsForCategory from "../../components/Admin/SellingsForCategory";
import { SideMenu } from "../../components/Admin/SideMenu";
import TotalRev from "../../components/Admin/TotalRev";

const AdminDashboard = () => {
  return (
    <div className=" w-full flex flex-row">
      <SideMenu />

      <div className="w-full p-6 h-screen">
        <div className="flex-row ">
          <TotalRev/>
          <SellingsForCategory/>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
