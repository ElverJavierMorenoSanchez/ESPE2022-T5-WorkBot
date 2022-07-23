import axios from "axios";
const baseUrl = "http://localhost:5500/products";

export async function GetProducts() {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        "access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGI0M2EyOWExZGI3ZDJhOGU5M2E3MiIsImlhdCI6MTY1ODUzNzMzNCwiZXhwIjoxNjU4NjIzNzM0fQ.44UYTg6clnTQWnhNQ5htZ1At89v1ognvRXBTmQ9HeHI",
      },
    });
    console.log(response);

    /*
    const response = await axios.post(baseUrl, {
      data: {
        email: "admin@gmail.com",
        password: "admin123",
      },
    });
*/
    //console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
