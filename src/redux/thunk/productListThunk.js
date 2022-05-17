import {
  fetchProductListRequest,
  fetchProductListSuccess,
  fetchProductListFailure,
} from "../productList/productListAction";
import baseUrl from "../../utilities/baseUrl";
import axios from "axios";

export const fetchProductLists = () => {
  return (dispatch) => {
    dispatch(fetchProductListRequest());

    let url = baseUrl + `products`;

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        const productsList = response.data;
        dispatch(fetchProductListSuccess(productsList));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchProductListFailure(error.message));
      });
  };
};
