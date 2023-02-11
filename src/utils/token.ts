import jwt from "jsonwebtoken";
import User from "@/resources/user/user.interface";
import Token from "@/utils/interfaces/token.interface";

export const createToken = (user: User): string => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET as jwt.Secret, {
    expiresIn: "1d",
  });
};

export const verifyToken = async (token: string): Promise<jwt.VerifyErrors | Token> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET as jwt.Secret, (err, payload) => {
      console.log("token 1");
      if (err) return reject(err);
      console.log("token 2");
      resolve(payload as Token);
    });
  });
};

export default { createToken, verifyToken };
