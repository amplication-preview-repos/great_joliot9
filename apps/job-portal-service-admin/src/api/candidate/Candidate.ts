import { Application } from "../application/Application";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Candidate = {
  applications?: Array<Application>;
  createdAt: Date;
  experience: string | null;
  id: string;
  resume: JsonValue;
  skills?: Array<"Option1">;
  updatedAt: Date;
  user?: User | null;
};
