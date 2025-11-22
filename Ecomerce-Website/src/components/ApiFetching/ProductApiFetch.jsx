import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ProductAction } from "../../store/ProductSlice";


const ProductApiFetch = () => {
    const dispatch = useDispatch();
    // console.log(dispatch)
  
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/products.json");
        // console.log("Data:", response.data);
        setTimeout(() => {
          
          dispatch(ProductAction.fetchedData(response.data))
          
        }, 4000)

      } catch (err) {
        console.log("Error:", err);
      } finally {
        console.log("Finally, response a gya");
      }
    };

    fetchData();
  }, []);

  return <></>;
};

export default ProductApiFetch;
