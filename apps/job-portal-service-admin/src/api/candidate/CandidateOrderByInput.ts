import { SortOrder } from "../../util/SortOrder";

export type CandidateOrderByInput = {
  createdAt?: SortOrder;
  experience?: SortOrder;
  id?: SortOrder;
  resume?: SortOrder;
  skills?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
