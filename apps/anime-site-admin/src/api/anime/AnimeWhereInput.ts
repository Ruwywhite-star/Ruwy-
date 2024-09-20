import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AnimeWhereInput = {
  description?: StringNullableFilter;
  genre?: "Option1";
  id?: StringFilter;
  rating?: FloatNullableFilter;
  releaseDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
