import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('quotes', { path: '' }, function() {
    this.route('new');

    this.route('edit', {
      path: ':quote_id/edit'
    });
  });
  this.route('users');
  this.route('login');
  this.route('signup');
});

export default Router;
