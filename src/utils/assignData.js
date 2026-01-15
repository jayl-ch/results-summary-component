import { getResult } from "@/services/resultService.js";

export const getData = async (setResult) => {
  try {
    const data = await getResult();
    setResult(data);
  } catch (error) {
    console.error(error);
  }
};
