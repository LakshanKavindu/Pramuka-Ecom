import { SideMenu } from "../../components/Admin/SideMenu";

const AdminDashboard = () => {
  return (
    <div className=" w-full flex flex-row">
      <SideMenu />

      <div className=" p-6 w-full h-screen">{/* content goes here  */}</div>
    </div>
  );
};

export default AdminDashboard;
