import { jwtDecode } from "jwt-decode";

interface MyTokenPayLoad {
  id: string;
  email: string;
  role: string;
}

export const decodeToken = (token: string): MyTokenPayLoad | null => {
  try {
    const decode = jwtDecode<MyTokenPayLoad>(token);
    return decode;
  } catch (err) {
    console.error(err);
    return null;
  }
};
