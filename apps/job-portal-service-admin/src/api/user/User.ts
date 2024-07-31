import { Candidate } from "../candidate/Candidate";
import { Employer } from "../employer/Employer";
import { JsonValue } from "type-fest";

export type User = {
  candidates?: Array<Candidate>;
  createdAt: Date;
  email: string | null;
  employers?: Array<Employer>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
