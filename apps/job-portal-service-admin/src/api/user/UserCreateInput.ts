import { CandidateCreateNestedManyWithoutUsersInput } from "./CandidateCreateNestedManyWithoutUsersInput";
import { EmployerCreateNestedManyWithoutUsersInput } from "./EmployerCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  candidates?: CandidateCreateNestedManyWithoutUsersInput;
  email?: string | null;
  employers?: EmployerCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
