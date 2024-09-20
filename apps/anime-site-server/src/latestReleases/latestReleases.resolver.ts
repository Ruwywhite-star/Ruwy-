import * as graphql from "@nestjs/graphql";
import { LatestReleasesResolverBase } from "./base/latestReleases.resolver.base";
import { LatestReleases } from "./base/LatestReleases";
import { LatestReleasesService } from "./latestReleases.service";

@graphql.Resolver(() => LatestReleases)
export class LatestReleasesResolver extends LatestReleasesResolverBase {
  constructor(protected readonly service: LatestReleasesService) {
    super(service);
  }
}
