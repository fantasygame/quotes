import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  quote: null,
  actions: {
    upvote() {
      console.log('upvote');
    },
    downvote() {
      console.log('downvote');
    }
  }
});
