import SellingsForCategory from "../../components/Admin/SellingsForCategory";
import { SideMenu } from "../../components/Admin/SideMenu";
import TotalRev from "../../components/Admin/TotalRev";
import StockCard from "../../components/Admin/StockCard";

const AdminDashboard = () => {
  return (
    <div className=" w-full flex flex-row">
      <SideMenu />

      <div className="w-full p-6 h-screen flex flex-wrap gap-8 ">
        <div className="flex-col ">
          <TotalRev />
          <SellingsForCategory />
        </div>
        <div>
          <StockCard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
