import { LoginInstance } from "../axiosconfig";

export const LoginMethod = async (payLoad) => {
  let result;
  try {
    result = await LoginInstance.post("/login", payLoad);
    return { ok: true, data: result, error: null };
  } catch (error) {
    return { ok: false, data: null, error: error };
  }
};
