import jwt from "jsonwebtoken";

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwt.decode(token) as any;
    if (decoded.exp) {
      return decoded.exp < Date.now() / 1000;
    }
    return true;
  } catch (e) {
    return true;
  }
};
