import { ApplicationCreateNestedManyWithoutJobsInput } from "./ApplicationCreateNestedManyWithoutJobsInput";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";

export type JobCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutJobsInput;
  description?: string | null;
  employer?: EmployerWhereUniqueInput | null;
  location?: string | null;
  salary?: number | null;
  title?: string | null;
};
