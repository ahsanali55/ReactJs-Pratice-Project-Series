import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../../store/cartSlice";
import { ProductAction } from "../../store/ProductSlice";

const Items = () => {
  const { cartItem, stockFull } = useSelector((state) => state.cart);
  console.log("Item at Cartssss: ", cartItem);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(CartActions.removeItemFromCArt(item));
    dispatch(ProductAction.enableButton(item));
  };

  const handleCartIncrement = (item) => {
    dispatch(CartActions.incrementCartQuantity(item));
  };
  const handleCartDecrement = (item) => {
    dispatch(CartActions.decrementCartQuantity(item));
  };

  useEffect(() => {
    if (stockFull === true) {
      const hasShow = localStorage.getItem("alert_shown");

      if (!hasShow) {
         alert("Stock is full");
        localStorage.setItem("alert_shown", "true");
      }
    }
  });

  return (
    <div className="w-full ">
      {cartItem?.map((item, index) => (
        <div
          key={index}
          className="flex justify-between px-3 py-5 border border-gray-300 duration-300"
        >
          {/* Left */}
          <div className="flex items-center gap-7 ">
            <div className="bg-[#E9D6D6] rounded-3xl px-3 text-[13px] opacity-80">
              {item?.category}
            </div>
            <img src={`/images/${item?.image}`} className="w-30" alt="" />
            <h1 className="text-[22px] font-semibold text-[#292C30]">
              {item?.name}
            </h1>
          </div>
          {/* Right */}
          <div className="flex items-center gap-7">
            <h3 className="text-gray-500 mr-14">
              {item?.price.toString().split(".")[0]} $
            </h3>
            <div className="flex items-center">
              <button
                className="border border-gray-300 rounded-l-lg px-10 py-2 font-semibold "
                onClick={() => handleCartIncrement(item)}
              >
                +
              </button>
              <h3 className="border border-gray-300 border-x-0  px-12 py-2 font-semibold">
                {item?.quantity}
              </h3>
              <button
                className="border border-gray-300 rounded-r-lg px-10 py-2 font-semibold tracking-widest "
                onClick={() => handleCartDecrement(item)}
              >
                -
              </button>
            </div>
            <button
              className="border-2 text-white bg-[#292C30] hover:border-2 hover:border-[#292C30] hover:bg-white hover:text-[#292C30] duration-75 px-20 py-2 rounded-md"
              onClick={() => handleRemove(item)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
