import { ManagedService, ManagedList, ManagedRecord, service, managedChild} from 'typescene';
import RemoteService from './Remote';

import { Movie } from '../models';

export class MovieItem extends ManagedRecord {
  constructor(public movie: Movie) {
    super();
  }
}

export default class MovieService extends ManagedService {
  name = "App.Movie";

  @service("App.Remote")
  remote?: RemoteService;

  @managedChild
  readonly movieList = new ManagedList()
    .restrict(MovieItem)
    .propagateEvents();

    async getMoviesAsync() {
      let result = await this.remote!.getAsync("movie");
      let movies: Movie[] = result;
      movies.map(movie => {
        this.movieList.add(new MovieItem(movie));
      });

      return this.movieList;
    }    
}