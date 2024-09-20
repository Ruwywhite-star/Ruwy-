/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Search } from "./Search";
import { SearchCountArgs } from "./SearchCountArgs";
import { SearchFindManyArgs } from "./SearchFindManyArgs";
import { SearchFindUniqueArgs } from "./SearchFindUniqueArgs";
import { DeleteSearchArgs } from "./DeleteSearchArgs";
import { SearchService } from "../search.service";
@graphql.Resolver(() => Search)
export class SearchResolverBase {
  constructor(protected readonly service: SearchService) {}

  async _searchesMeta(
    @graphql.Args() args: SearchCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Search])
  async searches(@graphql.Args() args: SearchFindManyArgs): Promise<Search[]> {
    return this.service.searches(args);
  }

  @graphql.Query(() => Search, { nullable: true })
  async search(
    @graphql.Args() args: SearchFindUniqueArgs
  ): Promise<Search | null> {
    const result = await this.service.search(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Search)
  async deleteSearch(
    @graphql.Args() args: DeleteSearchArgs
  ): Promise<Search | null> {
    try {
      return await this.service.deleteSearch(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
