const Order = ({ img, name, quantity, price }) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <img src={img} alt={name} className="w-1/6 h-20" />
      <div className="w-1/2">{name}</div>
      <div className="w-1/6">{quantity}</div>
      <div className="w-1/6">
        <span className="text-[0.7rem] px-1">LKR</span>
        {price}
      </div>
    </div>
  );
};

export default Order;
