import { LatestReleases as TLatestReleases } from "../api/latestReleases/LatestReleases";

export const LATESTRELEASES_TITLE_FIELD = "id";

export const LatestReleasesTitle = (record: TLatestReleases): string => {
  return record.id?.toString() || String(record.id);
};
