export const ProductStockCard = ({ name, brand, stock, image }) => {
  return (
    <div className=" bg-gray-50 text-xs w-[150px] h-[220px] shadow-gray-400 shadow-sm mb-2 flex-col justify-between rounded-lg px-2 py-6 ">
      <div className="product-stock-card__image w-full flex justify-center h-30 mb-2">
        <img
          src={image}
          alt=""
          className="h-20 object-cover rounded-lg  w-full"
        />
      </div>
      <div className="product-stock-card__info pt-5">
        <h3 className="product-stock-card__brand font-medium text-[1.1rem] mb-2 text-gray-700">
          {brand}
        </h3>
        <h3 className="product-stock-card__title font-normal text-[0.8rem] mb-2 text-gray-500">
          {name}
        </h3>

        <p className="product-stock-card__stock font-medium text-[1rem] text-gray-700">
          Stock:{" "}
          <span className={stock <= 20 ? "text-red-700" : "text-gray-700"}>
            {stock}
          </span>
        </p>
      </div>
    </div>
  );
};
