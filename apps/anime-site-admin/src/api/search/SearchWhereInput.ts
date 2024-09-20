import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SearchWhereInput = {
  id?: StringFilter;
  query?: StringNullableFilter;
  result?: JsonFilter;
  timestamp?: DateTimeNullableFilter;
};
