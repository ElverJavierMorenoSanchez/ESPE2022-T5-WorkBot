import axios from "axios";
const baseUrl = "http://3.86.206.55:3017";

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
