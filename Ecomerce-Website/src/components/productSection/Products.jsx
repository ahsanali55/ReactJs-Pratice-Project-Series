import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { ProductAction } from "../../store/ProductSlice";
import { CartActions } from "../../store/cartSlice";
import { LocalStorageActions } from "../../store/localStorageSlice";

const Products = () => {
  const prhghoduct  = useSelector((state) => console.log("Full store", state));
  const { product, localStorage } = useSelector((state) => state);
  console.log("LocalStorage: ", localStorage)
  // console.log(product);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(ProductAction.increment(id));
  };

  const handleDecrement = (id) => {
    dispatch(ProductAction.decrement(id));
  };
  const handleCart = (item) => {
        dispatch(LocalStorageActions.setLocalStorage(item));
        dispatch(LocalStorageActions.getLocalStorage());
    dispatch(CartActions.addToCArt(localStorage));
    // dispatch(CartActions.incrementCart(id));
  };
  return (
    <div className="w-full  bg-inherit grid grid-cols-3 gap-5 my-20  justify-between">
      {product?.map((item, index) => (
        <div
          key={index}
          data-aos="zoom-in"
          data-aos-duration="1300"
          data-aos-delay="0"
          data-aos-easing="ease-out"
          className="bg-white rounded-md shadow-xl
      shadow-gray-300 p-3 relative flex flex-col justify-between items-start gap-2"
        >
          <span className=" bg-[#E9D6D6] py-0.5 px-2  tracking-wider rounded-2xl">
            {item.category}
          </span>
          <div className="h-[350px] flex items-center">
            <img src={`/images/${item.image}`} className="" alt="" />
          </div>
          <h1 className="text-3xl font-semibold ">{item.name}</h1>
          <div className="flex gap-1 text-yellow-300 py-3">
            {[...Array(5)].map((__dirname, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <div className="min-h-[70px]">
            <p className="text-gray-700 tracking-wide font-normal  ">
              {item.description}
            </p>
          </div>
          <div className="flex gap-4 py-4">
            <h3
              className="text-2xl 
         "
            >
              RS: {item.price} $
            </h3>
            <h3 className="line-through text-2xl">RS: {item.orgPrice} $</h3>
          </div>
          <h3 className="text-lg">Total Stocks Available: {item.stock}</h3>
          <div className="flex items-center gap-4 py-4">
            <h3 className="text-xl font-semibold">Quantity(Pieces)</h3>
            <div className="flex relative">
              <button
                className="px-5 py-1 border border-gray-300 rounded-l-lg text-2xl font-extrabold cursor-pointer"
                onClick={() => handleIncrement(item.id)}
              >
                +
              </button>
              <p className="px-5 py-1 border border-x-0 border-gray-300  text-2xl font-bold">
                {item.quantity}
              </p>
              <button
                className="cursor-pointer px-5 py-1 border border-gray-300 rounded-r-lg text-2xl font-extrabold relative"
                onClick={() => handleDecrement(item.id)}
              >
                <p className="absolute top-0.5 right-4">-</p>
              </button>
            </div>
          </div>
          <button
            className="relative hover:scale-none mt-2 mb-5 border-2 border-black curser-pointer bg-[#292C30] flex gap-3  justify-between items-center max-w-[200px] rounded-md px-7 py-2 duration-200  hover:bg-white group hover:border-2 "
            onClick={() => handleCart(item)}
          >
            <FaCartArrowDown className="text-white text-[20px] group-hover:text-black" />
            <h1 className="text-white text-[20px] group-hover:text-black">
              Add To Cart
            </h1>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
