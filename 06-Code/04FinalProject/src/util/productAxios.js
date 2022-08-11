import axios from "axios";
const baseUrl = "http://3.86.206.55:3017/products";

/********************** 
    Products Crud
**********************/
export async function GetProducts() {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${baseUrl}`, {
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
    const response = await axios.post(`${baseUrl}`, product, {
      headers: {
        "access-token": token,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function putProduct(id, product) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(`${baseUrl}/${id}`, product, {
      headers: {
        "access-token": token,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProducts(id) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(`${baseUrl}/${id}`, {
      headers: {
        "access-token": token,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
