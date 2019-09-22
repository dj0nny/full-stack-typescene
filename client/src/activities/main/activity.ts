import { PageViewActivity, service } from "typescene";
import view from "./view";
import MovieService from '../../services/Movie';

export default class MainActivity extends PageViewActivity.with(view) {
  path = "";

  @service("App.Movie")
  movieService!: MovieService;

  async onManagedStateActiveAsync() {
    await super.onManagedStateActiveAsync();
    await this.movieService.getMoviesAsync();
  }
}
