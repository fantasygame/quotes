import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  session: Ember.inject.service('session'),
  actions: {
    upvote() {
      this.get('quote').upvote({user_id: this.get('session').currentUser.id}).then(response => {
        this.set('quote.voteBalance', response.voteBalance);
      });
    },
    downvote() {
      this.get('quote').downvote({user_id: this.get('session').currentUser.id}).then(response => {
        this.set('quote.voteBalance', response.voteBalance);
      });
    }
  }
});
