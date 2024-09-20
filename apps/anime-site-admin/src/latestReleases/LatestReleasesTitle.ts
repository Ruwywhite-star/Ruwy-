import { LatestReleases as TLatestReleases } from "../api/latestReleases/LatestReleases";

export const LATESTRELEASES_TITLE_FIELD = "title";

export const LatestReleasesTitle = (record: TLatestReleases): string => {
  return record.title?.toString() || String(record.id);
};
