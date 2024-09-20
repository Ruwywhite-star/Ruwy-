import { InputJsonValue } from "../../types";

export type SearchCreateInput = {
  query?: string | null;
  result?: InputJsonValue;
  timestamp?: Date | null;
};
