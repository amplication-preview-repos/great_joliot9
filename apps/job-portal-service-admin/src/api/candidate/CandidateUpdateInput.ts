import { ApplicationUpdateManyWithoutCandidatesInput } from "./ApplicationUpdateManyWithoutCandidatesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CandidateUpdateInput = {
  applications?: ApplicationUpdateManyWithoutCandidatesInput;
  experience?: string | null;
  resume?: InputJsonValue;
  skills?: Array<"Option1">;
  user?: UserWhereUniqueInput | null;
};
