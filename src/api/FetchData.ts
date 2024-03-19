import axios from "axios";

const id = import.meta.env.VITE_API_ID;
const key = import.meta.env.VITE_API_KEY;

export const fetchData = async (searchItem: string) => {
  try {
    return await axios.get(
      `${import.meta.env.VITE_API}?q=${searchItem}&app_id=${id}&app_key=${key}`
    );
  } catch (error) {
    console.log("error in Data fetching", error);
  }
};
