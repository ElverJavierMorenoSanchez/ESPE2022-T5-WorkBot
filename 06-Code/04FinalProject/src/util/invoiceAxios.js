import axios from "axios";
const baseUrl = "http://3.86.206.55:3017/invoices";

export async function getInvoices() {
  try {
    const invoices = await axios.get(`${baseUrl}`);
    return invoices.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postInvoice(body) {
  try {
    const invoice = await axios.post(`${baseUrl}`, body);
    return invoice.data;
  } catch (error) {
    console.log(error);
  }
}

export async function putInvoice(id, body) {
  try {
    const invoice = await axios.put(`${baseUrl}/${id}`, body);
    return invoice.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteInvoice(id) {
  try {
    const invoices = await axios.delete(`${baseUrl}/${id}`);
    return invoices.data;
  } catch (error) {
    console.log(error);
  }
}
