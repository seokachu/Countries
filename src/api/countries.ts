import axios from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

// 데이터 가져오기
export const getCountries = async () => {
  try {
    const { data } = await axios.get(SERVER_URL!);
    return data;
  } catch (error) {
    throw error;
  }
};
