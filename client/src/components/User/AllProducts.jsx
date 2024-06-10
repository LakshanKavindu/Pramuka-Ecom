import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "flowbite-react";
import axios from "axios";
import { Badge } from "flowbite-react";
import { IoBagSharp } from "react-icons/io5";

const AllProducts = ({ isSearching, searchresult }) => {
  const [products, SetProducts] = useState([]);
  const [visible, SetVisible] = useState(6);

  const handlevisible = () => {
    SetVisible(visible + 3);
  };

  //function to get products
  const getAllProducts = () => {
    axios
      .get("http://localhost:8080/api/home/allproducts")
      .then((products) => {
        SetProducts(products.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (isSearching) {
      SetProducts(searchresult);
    } else {
      getAllProducts();
    }
    //  console.log(searchresult)
    //  console.log(isSearching)
  }, [isSearching, searchresult]);

  return (
    <div className="flex flex-col items-center w-full">
      <div>
        {isSearching && searchresult.length > 0 && (
          <Badge
            icon={IoBagSharp}
            color="warning"
            size="md"
            style={{ padding: "6px 18px" }}
          >
            {searchresult.length} products found..
          </Badge>
        )}
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {products.slice(0, visible).map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
      <div className="w-full flex justify-center mt-4">
        {products.length > 0 ? (
          <Button
            className=" border-orange-500 outline-primary shadow-none text-primary hover:bg-primary hover:text-white transition-all"
            onClick={() => {
              handlevisible();
            }}
          >
            {" "}
            <h3>More Products</h3>
          </Button>
        ) : (
          <div className="text-2xl font-light	my-16">
            No matching Products Found....
          </div>
        )}
      </div>
    </div>
  );
};
export default AllProducts;
