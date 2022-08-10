import axios from "axios";
const baseUrl = "http://3.86.206.55:3017";
//const baseUrl = "http://3.86.206.55:3017";

/********************** 
        Auth
**********************/

export async function getToken(email, password) {
  try {
    const token = await axios.post(`${baseUrl}/auth/signIn`, {
      email,
      password,
    });
    return token.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postUser(user) {
  try {
    const token = await axios.post(`${baseUrl}/auth/signUp`, user);
    return token.data;
  } catch (error) {
    return { message: "User Exist" };
  }
}

/********************** 
    Products Crud
**********************/

/********************** 
    Invoices Crud
**********************/

/********************** 
    Users Crud
**********************/

/********************** 
    Credit Card Crud
**********************/

export async function GetProducts() {
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

/// CRUD CREDITCARD ///
