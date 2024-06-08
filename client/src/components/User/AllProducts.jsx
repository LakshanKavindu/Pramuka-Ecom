import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "flowbite-react";
import axios from "axios";


const AllProducts = ({isSearching,searchresult}) => {
  const [products, SetProducts] = useState([]);
  const [visible, SetVisible] = useState(6);

  const handlevisible = () => {
    SetVisible(visible + 3);
  }

  //function to get products
  const getAllProducts=()=>{
    axios.get('http://localhost:8080/api/home/allproducts')
    .then((products)=>{
    
      SetProducts(products.data.products)

    })
    .catch((error)=>{
      console.log(error)

    })

  }
  useEffect(()=>{
   if(isSearching){
    SetProducts(searchresult)
   }else{
    getAllProducts()
   }
  //  console.log(searchresult)
  //  console.log(isSearching)
  },[isSearching,searchresult])

  return (
    <div>
      {(isSearching && searchresult.length>0) && <div className="text-2xl font-bold mx-8">{searchresult.length} products found..</div>}
      <div className="flex flex-wrap justify-center">
        {products.slice(0, visible).map(item => {
          return (
            <ProductCard key={item.id}  item={item}/>
           
          )
        })}
      </div>
      <div className="flex justify-center">
        {products.length>0 ?<Button className=" border-orange-500 outline-primary shadow-none text-primary hover:bg-primary hover:text-white transition-all" onClick={() => { handlevisible() }}> <h3>More Products</h3></Button>:<div className="text-2xl font-bold my-16">No matching Products....</div>}
      </div>


    </div>
  );
};
export default AllProducts;
