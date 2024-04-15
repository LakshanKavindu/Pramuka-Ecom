import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "flowbite-react";


const AllProducts = () => {
  const [products, SetProducts] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14,
  ]);
  const [visible, SetVisible] = useState(6);

  const handlevisible=()=>{
    SetVisible(visible+3);
  }
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {products.slice(0,visible).map(item=>{
            return(
                <ProductCard/>
            )
        })}
      </div>
      <div className="flex justify-center">
      <Button gradientMonochrome="lime" onClick={()=>{handlevisible()}}> <h3>More Products</h3></Button>
      </div>


    </div>
  );
};
export default AllProducts;
