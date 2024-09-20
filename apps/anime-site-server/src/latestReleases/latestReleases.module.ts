import { Module } from "@nestjs/common";
import { LatestReleasesModuleBase } from "./base/latestReleases.module.base";
import { LatestReleasesService } from "./latestReleases.service";
import { LatestReleasesController } from "./latestReleases.controller";
import { LatestReleasesResolver } from "./latestReleases.resolver";

@Module({
  imports: [LatestReleasesModuleBase],
  controllers: [LatestReleasesController],
  providers: [LatestReleasesService, LatestReleasesResolver],
  exports: [LatestReleasesService],
})
export class LatestReleasesModule {}
