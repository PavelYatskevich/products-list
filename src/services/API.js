import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import data from './product-list'



const getProductList = () =>
    axios.get("/productList");


export {
    getProductList
}
