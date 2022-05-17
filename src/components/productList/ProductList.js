import React, { useState, useEffect } from "react";
import { fetchProductLists } from "../../redux/thunk/productListThunk";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const productLists = useSelector((state) => state.productList.productList);

  useEffect(() => {
    if (productLists && productLists.length <= 0) {
      dispatch(fetchProductLists());
    }
  }, []);

  return (
    <>
      {productLists && productLists.length > 0 ? (
        <div>{JSON.stringify(productLists)}</div>
      ) : (
        <div>Loading Please wait !!!</div>
      )}
    </>
  );
};

export default ProductList;
