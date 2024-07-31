import { SortOrder } from "../../util/SortOrder";

export type EmployerOrderByInput = {
  companyName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  website?: SortOrder;
};
