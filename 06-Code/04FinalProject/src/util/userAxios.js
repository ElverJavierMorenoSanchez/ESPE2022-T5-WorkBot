<<<<<<< HEAD
export async function getUsers() {
  try {
    const users = await axios.get(`${baseUrl}/users`);
    return users.data;
  } catch (error) {
    console.log(error);
  }
}

export async function putUser(id, body) {
  try {
    const user = await axios.put(`${baseUrl}/users/${id}`, body);
    return user.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(id) {
  try {
    const user = await axios.delete(`${baseUrl}/users/${id}`);
    return user.data;
  } catch (error) {
    console.log(error);
  }
}
=======
import axios from "axios";
const baseUrl = "http://3.86.206.55:3017/users";

export async function getUsers() {
    try {
      const users = await axios.get(`${baseUrl}/`);
      return users.data;
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function putUser(id, body) {
    try {
      const user = await axios.put(`${baseUrl}/${id}`, body);
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function deleteUser(id) {
    try {
      const user = await axios.delete(`${baseUrl}/${id}`);
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
>>>>>>> 9dc6172cd6332114c7aed9c1348459e735c75252
