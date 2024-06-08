"use client";
import { useState } from "react";
import { SideMenu } from "../../components/Admin/SideMenu";
import { FloatingLabel } from "flowbite-react";
import { Select } from "flowbite-react";
import UploadImageCloudinary from "../../components/Common/UploadImageCloudinary";

const AdminAddProduct = () => {
  const [value, setValue] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    image: "",
    stock: "",
    price: "",
  });
  //   const [productImage, setProductImage] = useState("");

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <div className=" w-full flex flex-row overflow-hidden">
      <SideMenu />

      <div className=" w-full p-6 h-screen">
        <div className=" mb-3 h-12">
          <p className=" font-bold text-2xl">Add a product</p>
        </div>
        <div className="flex flex-col justify-center w-full h-full items-center overflow-y-scroll">
          <div className=" flex items-center gap-4 mb-2 ">
            <p className="text-sm text-gray-500 w-20"> Name</p>
            <FloatingLabel
              variant="standard"
              label="Product Name"
              style={{ width: "250px" }}
              size="sm"
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
          </div>
          <div className=" flex items-center gap-4 mb-2 ">
            <p className="text-sm text-gray-500 w-20">Description</p>
            <FloatingLabel
              variant="standard"
              label="Description"
              style={{ width: "250px" }}
              size="sm"
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
            />
          </div>
          <div className=" flex items-center gap-4 mb-2 ">
            <p className="text-sm text-gray-500 w-20">Brand</p>
            <FloatingLabel
              variant="standard"
              label="product Brand"
              style={{ width: "250px" }}
              size="sm"
              onChange={(e) => setValue({ ...value, brand: e.target.value })}
            />
          </div>
          <div className=" flex items-center gap-4 mb-2 ">
            <p className="text-sm text-gray-500 w-20">Category</p>
            <div className="max-w-md">
              <Select
                required
                style={{ width: "250px" }}
                onChange={(e) =>
                  setValue({ ...value, category: e.target.value })
                }
              >
                <option selected value="none">
                  Select Category
                </option>
                <option value="chocolate">Chocolate</option>
                <option value="biscuit">Biscuit</option>
              </Select>
            </div>
          </div>
          <div className=" flex items-center gap-4 mb-2 ">
            <p className="text-sm text-gray-500 w-20">Image</p>
            <div className="max-w-md" style={{ width: "250px" }}>
              <UploadImageCloudinary
                folderName="product"
                setImage={(image) => setValue({ ...value, image: image })}
                isMultiple={false}
                limit={1}
                buttonName="Upload Image"
                buttonVariant="outlined"
                isDisplayImageName={true}
              />
            </div>
          </div>

          <div className=" flex items-center gap-4 mb-2 ">
            <p className="text-sm text-gray-500 w-20">Stock</p>
            <FloatingLabel
              variant="standard"
              label="Product Stock"
              style={{ width: "250px" }}
              size="sm"
              type="number"
              onChange={(e) => setValue({ ...value, stock: e.target.value })}
            />
          </div>
          <div className=" flex items-center gap-4 mb-2 ">
            <p className="text-sm text-gray-500 w-20">Price</p>
            <FloatingLabel
              variant="standard"
              label="Product Price"
              style={{ width: "250px" }}
              size="sm"
              type="number"
              onChange={(e) => setValue({ ...value, price: e.target.value })}
            />
          </div>
          {/* submit button below */}
          <div className="flex justify-center w-full">
            <button
              onClick={handleSubmit}
              className="bg-primary text-white px-3 py-2 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProduct;
