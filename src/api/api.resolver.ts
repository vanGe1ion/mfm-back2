import { Args, Query, Resolver } from '@nestjs/graphql';
import { ApiService } from './api.service';
import FindMoviesInputDto from './dto/find-movies-input.dto';
import FindMoviesOutputDto from './dto/find-movies-output.dto';
import ApiGenre from './dto/object-genre.dto';

@Resolver()
export class ApiResolver {
  constructor(private apiService: ApiService) {}

  @Query((returns) => [ApiGenre])
  async getGenres(): Promise<ApiGenre[]> {
    return await this.apiService.getGenres();
  }

  @Query((returns) => FindMoviesOutputDto)
  async findMovies(
    @Args('findMoviesInputDto', { type: () => FindMoviesInputDto })
    findMoviesInputDto: FindMoviesInputDto,
  ): Promise<FindMoviesOutputDto> {
    return await this.apiService.findMovies(findMoviesInputDto);
  }
}
