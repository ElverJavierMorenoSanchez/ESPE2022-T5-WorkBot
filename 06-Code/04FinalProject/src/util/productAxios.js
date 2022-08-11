import axios from "axios";
<<<<<<< Updated upstream
const baseUrl = "http://3.86.206.55:3017";
=======
const baseUrl = 'http://3.86.206.55:3017/products';
>>>>>>> Stashed changes

/********************** 
    Products Crud
**********************/
export async function GetProducts() {
<<<<<<< Updated upstream
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${baseUrl}/products`, {
      headers: {
        "access-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
=======
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${baseUrl}/products`, {
        headers: {
          "access-token": token,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
>>>>>>> Stashed changes
  }
}

export async function postProducts(product) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(`${baseUrl}/products`, {
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

export async function putProduct(id, product) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(`${baseUrl}/products/${id}`, {
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

export async function deleteProducts(id) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(`${baseUrl}/products/${id}`, {
      headers: {
        "access-token": token,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
