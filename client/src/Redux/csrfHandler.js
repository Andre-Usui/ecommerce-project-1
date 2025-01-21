import axios from "axios";
import { BASE_URL } from "./constants/BASE_URL";

export const csrfHandler = async () => {

  try {
    console.log('csrf handler was called');
    const response = await axios.get(
      `${BASE_URL}/api/csrf`,
      {
        withCredentials: true
        
        });
    const csrf = response.data.csrfToken;
    return csrf
  } catch (err) {
    console.log(err)
  }
}