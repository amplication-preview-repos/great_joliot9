import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  employerId?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  salary?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
