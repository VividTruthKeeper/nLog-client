// Modules
import bcrypt from "bcryptjs";
// import expressAsyncHandler from "express-async-handler";
// import { v4 as uuidv4 } from "uuid";

// Salty hash
export const hashPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};
