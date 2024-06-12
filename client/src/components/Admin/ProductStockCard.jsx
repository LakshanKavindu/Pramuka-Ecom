export const ProductStockCard = () => {
  return (
    <div
      className=" bg-gray-50 px-2 py-0.5 text-xs font-medium shadow-gray-900
    "
    >
      <div className="product-stock-card__image">
        <img
          src="https://m.media-amazon.com/images/I/51Mn7ieOqNL._AC_UF894,1000_QL80_.jpg"
          alt=""
          className="w-20 h-20 object-cover rounded-lg shadow-custom-light"
        />
      </div>
      <div className="product-stock-card__info">
        <h3 className="product-stock-card__title">Product Title</h3>
        <p className="product-stock-card__stock">Stock: 50</p>
      </div>
    </div>
  );
};
