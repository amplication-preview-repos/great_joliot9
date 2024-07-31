import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployerListRelationFilter } from "../employer/EmployerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  candidates?: CandidateListRelationFilter;
  email?: StringNullableFilter;
  employers?: EmployerListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
