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
