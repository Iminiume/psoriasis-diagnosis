import axios from "axios";

export async function serverFetch(config) {
  try {
    const response = await axios(config);
    return response.data; // Return only the data
  } catch (error) {
    console.error("Server fetch error:", error);
    throw error;
  }
}
