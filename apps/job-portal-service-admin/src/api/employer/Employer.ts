import { Job } from "../job/Job";
import { User } from "../user/User";

export type Employer = {
  companyName: string | null;
  createdAt: Date;
  id: string;
  jobs?: Array<Job>;
  location: string | null;
  updatedAt: Date;
  user?: User | null;
  website: string | null;
};
