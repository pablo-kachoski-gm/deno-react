import APIMethods from "../types/APIMethods";
import { API_BASE_URL } from "./constants";

interface FetchAPIInterface {
  endpoint: string;
  method: APIMethods;
  body?: any;
}
const fetchAPI = async ({ endpoint, method, body }: FetchAPIInterface) => {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    Object.assign({
      method: `${method}`,
      headers: { "Content-Type": "application/json" },
    }, body && { body }),
  );

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return await response.json();
};
export default fetchAPI;
