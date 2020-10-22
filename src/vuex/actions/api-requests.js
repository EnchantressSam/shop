import Axios from "axios";
export default {
    GET_PRODUCTS_FROM_API({ commit }) {
        return Axios("http://localhost:3000/products", {
            method: "GET",
        })
            .then((products) => {
                commit("SET_PRODUCRS_TO_STATE", products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }
}