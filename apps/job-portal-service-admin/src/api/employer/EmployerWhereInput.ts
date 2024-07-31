import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployerWhereInput = {
  companyName?: StringNullableFilter;
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  location?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  website?: StringNullableFilter;
};
