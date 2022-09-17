// Modules
import { v4 as uuiv4 } from "uuid";

// Types
import { UserAttributes } from "../types/userTypes";

export const users: UserAttributes[] = [
  {
    id: uuiv4(),
    name: "Spider",
    email: "asd@gmail.com",
    password: "abc123",
  },
  { id: uuiv4(), name: "Batman", email: "zxc@gmail.com", password: "abc345" },
];
