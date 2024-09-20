import { SortOrder } from "../../util/SortOrder";

export type AnimeOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  releaseDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
