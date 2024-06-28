"use client";
import { useState } from "react";
import { SideMenu } from "../../components/Admin/SideMenu";
import { FloatingLabel } from "flowbite-react";
import { Select } from "flowbite-react";
import UploadImageCloudinary from "../../components/Common/UploadImageCloudinary";
import axiosClient from "../../utils/axiosClient";
import { AlertBar } from "../../components/Common/AlertBar";

const AdminAddProduct = () => {
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertInvalid, setAlertInvalid] = useState(false);
  const [alertEmpty, setAlertEmpty] = useState(false);
  const [value, setValue] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    stock: "",
    price: "",
    oldPrice: "",
  });

  console.log("product", value);
  const [productImage, setProductImage] = useState("");

  const handleSubmit = () => {
    if (
      value.name === "" ||
      value.brand === "" ||
      value.category === "" ||
      value.stock === "" ||
      value.price === ""
    ) {
      setAlertEmpty(true);
      setTimeout(() => {
        setAlertEmpty(false);
      }, 2000);
      return;
    }

    if (value.category === "none") {
      setAlertEmpty(true);
      setTimeout(() => {
        setAlertEmpty(false);
      }, 2000);
      return;
    }

    if (isNaN(value.stock) || isNaN(value.price)) {
      setAlertEmpty(true);
      setTimeout(() => {
        setAlertEmpty(false);
      }, 2000);
      return;
    }

    if (value.stock < 0 || value.price < 0) {
      setAlertInvalid(true);
      setTimeout(() => {
        setAlertInvalid(false);
      }, 2000);
      return;
    }

    if (value.oldPrice) {
      if (value.oldPrice < 0) {
        setAlertInvalid(true);
        setTimeout(() => {
          setAlertInvalid(false);
        }, 2000);
        return;
      }
    }

    axiosClient
      .post("/auth/admin/addproduct", {
        ...value,
        image: productImage,
      })
      .then((res) => {
        console.log(res, "added product successfully");
        setValue({
          name: "",
          description: "",
          brand: "",
          category: "",
          stock: "",
          price: "",
          oldPrice: "",
        });

        setProductImage("");

        setAlertSuccess(true);
        setTimeout(() => {
          setAlertSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" w-full flex flex-row overflow-hidden">
      <SideMenu />

      <div className=" w-full p-6 h-screen">
        <div className=" mb-3 h-5">
          <p className=" font-bold text-2xl">Add a product</p>
        </div>
        <div className="flex flex-col justify-start w-full h-full items-center overflow-y-scroll pt-8">
          <div className=" flex items-center gap-4 mb-2 ">
            <p className="text-sm text-gray-500 w-20"> Name</p>
            <FloatingLabel
              variant="standard"
              label="Product Name"
              style={{ width: "250px" }}
              size="sm"
              onChange={(e) => setValue({ ...value, name: e.target.value })}
              value={value.name}
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
              value={value.description}
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
              value={value.brand}
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
                value={value.category}
                color={"primary"}
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
            <p className="text-sm text-gray-500 w-20">Stock</p>
            <FloatingLabel
              variant="standard"
              label="Product Stock"
              style={{ width: "250px" }}
              size="sm"
              type="number"
              onChange={(e) => setValue({ ...value, stock: e.target.value })}
              value={value.stock}
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
              value={value.price}
            />
          </div>
          <div className=" flex items-center gap-4 mb-2 ">
            <p className="text-sm text-gray-500 w-20">Old Price</p>
            <FloatingLabel
              variant="standard"
              label="Old Price"
              style={{ width: "250px" }}
              size="sm"
              type="number"
              onChange={(e) => setValue({ ...value, oldPrice: e.target.value })}
              value={value.oldPrice}
            />
          </div>
          <div className=" flex items-center gap-4 mb-2 ">
            <p className="text-sm text-gray-500 w-20">Image</p>
            <div className="max-w-md" style={{ width: "250px" }}>
              <UploadImageCloudinary
                folderName="product"
                setImage={setProductImage}
                isMultiple={false}
                limit={1}
                buttonName="Upload Image"
                buttonVariant="outlined"
                isDisplayImageName={true}
              />
            </div>
          </div>
          {/* submit button below */}
          <div className="flex justify-center w-full mt-4">
            <button
              onClick={handleSubmit}
              className="bg-primary text-white px-3 py-2 rounded-lg"
            >
              Add Product
            </button>
          </div>
          {alertSuccess && (
            <AlertBar message="Product added successfully" type="success" />
          )}
          {alertEmpty && (
            <AlertBar message="Please fill all fields" type="error" />
          )}
          {alertInvalid && (
            <AlertBar message="Please enter valid input" type="error" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAddProduct;
