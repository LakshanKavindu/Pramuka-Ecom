import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "flowbite-react";
import axios from "axios";


const AllProducts = () => {
  const [products, SetProducts] = useState([]);
  const [visible, SetVisible] = useState(6);

  const handlevisible = () => {
    SetVisible(visible + 3);
  }

  //function to get products
  const getAllProducts=()=>{
    axios.get('http://localhost:8080/api/home/allproducts')
    .then((products)=>{
      console.log(products.data.products[0])
      SetProducts(products.data.products)

    })
    .catch((error)=>{
      console.log(error)

    })

  }
  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {products.slice(0, visible).map(item => {
          return (
            <ProductCard  item={item}/>
           
          )
        })}
      </div>
      <div className="flex justify-center">
        <Button className=" border-orange-500 outline-primary shadow-none text-primary hover:bg-primary hover:text-white transition-all" onClick={() => { handlevisible() }}> <h3>More Products</h3></Button>
      </div>


    </div>
  );
};
export default AllProducts;
