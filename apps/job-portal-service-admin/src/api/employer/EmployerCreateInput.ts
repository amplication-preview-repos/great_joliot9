import { JobCreateNestedManyWithoutEmployersInput } from "./JobCreateNestedManyWithoutEmployersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployerCreateInput = {
  companyName?: string | null;
  jobs?: JobCreateNestedManyWithoutEmployersInput;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
  website?: string | null;
};
