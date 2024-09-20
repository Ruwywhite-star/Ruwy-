import { SortOrder } from "../../util/SortOrder";

export type SearchOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  query?: SortOrder;
  result?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
