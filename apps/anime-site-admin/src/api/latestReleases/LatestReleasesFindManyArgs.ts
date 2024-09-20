import { LatestReleasesWhereInput } from "./LatestReleasesWhereInput";
import { LatestReleasesOrderByInput } from "./LatestReleasesOrderByInput";

export type LatestReleasesFindManyArgs = {
  where?: LatestReleasesWhereInput;
  orderBy?: Array<LatestReleasesOrderByInput>;
  skip?: number;
  take?: number;
};
