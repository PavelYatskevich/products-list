import axios from 'axios';
import data from './product-list.json'
import MockAdapter from "axios-mock-adapter";


// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/productList").reply(200, {
    productList: data,
});
export class ProductsService {
    public static getProducts() {
        return axios.get("/productList");
    }
}
