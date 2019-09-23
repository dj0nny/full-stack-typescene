import { PageViewActivity, service } from 'typescene';
import view from './view';

export default class addMovieActivity extends PageViewActivity.with(view) {
  path = "/add";
}