/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Anime as PrismaAnime } from "@prisma/client";

export class AnimeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AnimeCountArgs, "select">): Promise<number> {
    return this.prisma.anime.count(args);
  }

  async animeItems(args: Prisma.AnimeFindManyArgs): Promise<PrismaAnime[]> {
    return this.prisma.anime.findMany(args);
  }
  async anime(args: Prisma.AnimeFindUniqueArgs): Promise<PrismaAnime | null> {
    return this.prisma.anime.findUnique(args);
  }
  async createAnime(args: Prisma.AnimeCreateArgs): Promise<PrismaAnime> {
    return this.prisma.anime.create(args);
  }
  async updateAnime(args: Prisma.AnimeUpdateArgs): Promise<PrismaAnime> {
    return this.prisma.anime.update(args);
  }
  async deleteAnime(args: Prisma.AnimeDeleteArgs): Promise<PrismaAnime> {
    return this.prisma.anime.delete(args);
  }
}
