import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  quote: null,
  actions: {
    upvote() {
      this.get('quote').upvote({user_id: 2}).then(response => {
        this.set('quote.voteBalance', response.voteBalance);
      });
    },
    downvote() {
      this.get('quote').downvote({user_id: 2}).then(response => {
        this.set('quote.voteBalance', response.voteBalance);
      });
    }
  }
});
