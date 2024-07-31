import { ApplicationUpdateManyWithoutJobsInput } from "./ApplicationUpdateManyWithoutJobsInput";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";

export type JobUpdateInput = {
  applications?: ApplicationUpdateManyWithoutJobsInput;
  description?: string | null;
  employer?: EmployerWhereUniqueInput | null;
  location?: string | null;
  salary?: number | null;
  title?: string | null;
};
