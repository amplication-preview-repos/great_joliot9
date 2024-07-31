import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type JobWhereInput = {
  applications?: ApplicationListRelationFilter;
  description?: StringNullableFilter;
  employer?: EmployerWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  salary?: FloatNullableFilter;
  title?: StringNullableFilter;
};
