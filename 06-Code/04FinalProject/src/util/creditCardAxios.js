import axios from "axios";
const baseUrl = "http://3.86.206.55:3017";

/********************** 
    Credit Card Crud
**********************/

export async function getCreditCards() {
  try {
    const creditCards = await axios.get(`${baseUrl}/creditCards`);

    console.log(creditCards.data);
    return creditCards.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postCreditCard(body) {
  try {
    const creditCard = await axios.post(`${baseUrl}/creditCards`, body);
    return creditCard.data;
  } catch (error) {
    console.log(error);
  }
}

export async function putCreditCard(id, body) {
  try {
    const creditCard = await axios.put(`${baseUrl}/creditCards/${id}`, body);
    return creditCard.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCreditCard(id) {
  try {
    const creditCard = await axios.delete(`${baseUrl}/creditCards/${id}`);
    return creditCard.data;
  } catch (error) {
    console.log(error);
  }
}
