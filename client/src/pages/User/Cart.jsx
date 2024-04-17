import Footern from "../../components/User/Footer";
import Nav from "../../components/User/Navbar";

const Cart = () => {
  return (
    <>
      <Nav isActive={"cart"} />

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Cart Page</h1>
      </div>
      <Footern />
    </>
  );
};

export default Cart;
