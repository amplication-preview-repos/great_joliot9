import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ApplicationWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  coverLetter?: StringNullableFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  status?: "Option1";
};
