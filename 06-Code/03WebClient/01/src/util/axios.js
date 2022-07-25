import axios from "axios";
const baseUrl = "http://3.86.165.121:3017/products";
//const baseUrl = "http://localhost:5500/products";

export async function GetProducts() {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        "access-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postProducts(product) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(baseUrl, {
      headers: {
        "access-token": token,
      },
      data: product,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
