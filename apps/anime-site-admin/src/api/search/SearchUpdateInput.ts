import { InputJsonValue } from "../../types";

export type SearchUpdateInput = {
  query?: string | null;
  result?: InputJsonValue;
  timestamp?: Date | null;
};
