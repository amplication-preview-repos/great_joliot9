import { ApplicationCreateNestedManyWithoutCandidatesInput } from "./ApplicationCreateNestedManyWithoutCandidatesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CandidateCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutCandidatesInput;
  experience?: string | null;
  resume?: InputJsonValue;
  skills?: Array<"Option1">;
  user?: UserWhereUniqueInput | null;
};
