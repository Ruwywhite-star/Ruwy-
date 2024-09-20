import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LatestReleasesServiceBase } from "./base/latestReleases.service.base";

@Injectable()
export class LatestReleasesService extends LatestReleasesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
