import { JobUpdateManyWithoutEmployersInput } from "./JobUpdateManyWithoutEmployersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployerUpdateInput = {
  companyName?: string | null;
  jobs?: JobUpdateManyWithoutEmployersInput;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
  website?: string | null;
};
