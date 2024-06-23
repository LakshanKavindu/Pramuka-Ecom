import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import axiosClient from "../../utils/axiosClient";

export default function CartItems(props) {
    const [amount, setAmount] = useState(props.item.quantity);
    const decreaseAmount =() => {
       
     
          if (amount > 1) {
             setAmount((prev) => prev - 1);
            
          }
       
       
      };
    
      const increaseAmount = () => {
        setAmount((prev) => prev + 1);
      };
      const totalPrice = props.unitPrice * amount;

      const updatecart=()=>{

  
        const user = JSON.parse(sessionStorage.getItem('user'));
        console.log('update cart called',amount)
        axiosClient.put('/product/updatecart',{
          productid:props.item.product.id,
          userid:user.email,
          quantity:amount
    
    
        })
        .then((res)=>{
          props.getmycart()
          console.log(res)
        })
        .catch((Error)=>{
          console.log(Error)
        })
      } 


      const removefromcart=()=>{

        const user = JSON.parse(sessionStorage.getItem('user'));
        axiosClient.delete(`http://localhost:8080/api/product/deletefromcart/${props.item.product.id}/${user.email}`)
        .then((res)=>{
          props.getmycart();
          props.updatesubtotal()

          console.log(res)
        })
        .catch((Error)=>{
          console.log(Error)
        })
      }
 
      useEffect(()=>{
        updatecart()


      },[amount])

  return (
    <tr className="border-y border-solid text-xl border-[#E5E5E5]  bg-[#f2f2f2] ">
    <td className="py-5 w-3/5">
    <div className="flex flex-row gap-20 pl-4">
        <img
        src={props.item.product.productImage}
        alt="product"
        className="w-[200px] h-[200px] rounded-lg shadow-custom-light"
        />
        <div className="flex flex-col text-xl  justify-center gap-4 ">
        <h4 className="text-black1 text-2xl font-semibold">{props.item.product.productName}</h4>
        <div className="flex flex-row items-center gap-1 text-center text-primary">
<MdDeleteForever className="text-center w-6 h-6 flex justify-center items-center"
onClick={()=>{
  console.log('remove from cart')
  removefromcart()
}}

/>
<button onClick={()=>{
  console.log('remove from cart')
  removefromcart()
}}>remove</button>
{/* <a href="" >Remove</a> */}
</div>
        </div>  
    </div>
    </td>
    <td className="">
        <p className="  text-center">LKR {props.item.product.productPrice}{".00"}</p>
        
    </td>
    <td className=" text-center ">

  <div className="flex flex-row items-center m-auto border border-solid border-primary rounded-xl w-fit">
    <button
      className="px-3   text-secondary text-[2rem] "
      onClick={()=>{
        decreaseAmount()
        // updatecart()
        // handledecrese()
      }}
    >
      -
    </button>
    <span className=" px-3 rounded-lg text-black1  ">
      {amount}
    </span>
    <button
      className=" px-3   text-secondary text-[1.5rem] "
      onClick={()=>{
        increaseAmount()
        // updatecart()
      }}
    >
      +
    </button>
  </div>
    </td>
    <td className="">
    <p className="  text-center ">LKR {amount*props.item.product.productPrice}{".00"}</p>
    </td>

 </tr>
  )
}

// This is a comment