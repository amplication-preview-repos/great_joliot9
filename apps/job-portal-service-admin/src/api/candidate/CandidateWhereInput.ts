import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CandidateWhereInput = {
  applications?: ApplicationListRelationFilter;
  experience?: StringNullableFilter;
  id?: StringFilter;
  resume?: JsonFilter;
  user?: UserWhereUniqueInput;
};
