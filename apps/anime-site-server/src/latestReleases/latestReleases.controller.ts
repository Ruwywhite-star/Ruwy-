import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LatestReleasesService } from "./latestReleases.service";
import { LatestReleasesControllerBase } from "./base/latestReleases.controller.base";

@swagger.ApiTags("latestReleases")
@common.Controller("latestReleases")
export class LatestReleasesController extends LatestReleasesControllerBase {
  constructor(protected readonly service: LatestReleasesService) {
    super(service);
  }
}
