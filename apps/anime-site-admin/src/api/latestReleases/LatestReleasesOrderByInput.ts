import { SortOrder } from "../../util/SortOrder";

export type LatestReleasesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
