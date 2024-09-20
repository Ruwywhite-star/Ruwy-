import { JsonValue } from "type-fest";

export type Search = {
  createdAt: Date;
  id: string;
  query: string | null;
  result: JsonValue;
  timestamp: Date | null;
  updatedAt: Date;
};
