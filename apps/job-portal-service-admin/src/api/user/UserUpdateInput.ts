import { CandidateUpdateManyWithoutUsersInput } from "./CandidateUpdateManyWithoutUsersInput";
import { EmployerUpdateManyWithoutUsersInput } from "./EmployerUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  candidates?: CandidateUpdateManyWithoutUsersInput;
  email?: string | null;
  employers?: EmployerUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
