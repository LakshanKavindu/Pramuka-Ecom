"use client";

import { Button, Modal } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
import { Select } from "flowbite-react";
import UploadImageCloudinary from "../Common/UploadImageCloudinary";
import { AlertBar } from "../Common/AlertBar";

export function EditModal({
  openModal,
  setOpenModal,
  productId,
  productName,
  productDescription,
  productBrand,
  productCategory,
  productStock,
  productPrice,
  productImage,
  productPrevPrice,
  setProductName,
  setProductDescription,
  setProductBrand,
  setProductCategory,
  setProductStock,
  setProductPrice,
  setProductImage,
  setproductPrevPrice,
  handleSave,
}) {
  console.log(productImage, "productImage");
  console.log(productName, "productName");
  //   const [alertSuccess, setAlertSuccess] = useState(false);
  //   const [alertInvalid, setAlertInvalid] = useState(false);
  //   const [alertEmpty, setAlertEmpty] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal
        show={openModal}
        size="lg"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className=" mb-3 flex justify-center">
            <img src={productImage} alt="product" className="w-20 h-20" />
          </div>
          <div className="flex flex-col justify-start w-full  items-center  ">
            <div className=" flex items-center gap-4 mb-2 ">
              <p className="text-sm text-gray-500 w-20"> Name</p>
              <FloatingLabel
                variant="standard"
                label="Product Name"
                style={{ width: "250px" }}
                size="sm"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
            </div>
            <div className=" flex items-center gap-4 mb-2 ">
              <p className="text-sm text-gray-500 w-20">Description</p>
              <FloatingLabel
                variant="standard"
                label="Description"
                style={{ width: "250px" }}
                size="sm"
                onChange={(e) => setProductDescription(e.target.value)}
                value={productDescription}
              />
            </div>
            <div className=" flex items-center gap-4 mb-2 ">
              <p className="text-sm text-gray-500 w-20">Brand</p>
              <FloatingLabel
                variant="standard"
                label="product Brand"
                style={{ width: "250px" }}
                size="sm"
                onChange={(e) => setProductBrand(e.target.value)}
                value={productBrand}
              />
            </div>
            <div className=" flex items-center gap-4 mb-2 ">
              <p className="text-sm text-gray-500 w-20">Category</p>
              <div className="max-w-md">
                <Select
                  required
                  style={{ width: "250px" }}
                  onChange={(e) => setProductCategory(e.target.value)}
                  value={productCategory}
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
                onChange={(e) => setProductStock(e.target.value)}
                value={productStock}
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
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
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
                onChange={(e) => setproductPrevPrice(e.target.value)}
                value={productPrevPrice}
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
                onClick={() => handleSave(productId)}
                className="bg-primary text-white px-3 py-2 rounded-lg"
              >
                Save changes
              </button>
            </div>
            {/* {alertSuccess && (
              <AlertBar message="Product Updated successfully" type="success" />
            )}
            {alertEmpty && (
              <AlertBar message="Please fill all fields" type="error" />
            )}
            {alertInvalid && (
              <AlertBar message="Please enter valid input" type="error" />
            )} */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
