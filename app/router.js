import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // main page
  this.route('index', {path: '/'});
  // login page
  this.route('login', {});
  // 404
  this.route('notfound', {path: '*path'});
  // issues page
  this.route('issues');
});

export default Router;
