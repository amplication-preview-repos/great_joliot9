import { Candidate } from "../candidate/Candidate";
import { Job } from "../job/Job";

export type Application = {
  candidate?: Candidate | null;
  coverLetter: string | null;
  createdAt: Date;
  id: string;
  job?: Job | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
