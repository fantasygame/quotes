import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  session: Ember.inject.service('session'),
  quote: null,
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
    },
  },
  canEdit: Ember.computed('session.data.authenticated.user_id', function() {
    return this.get('session.data.authenticated.user_id') === this.get('quote').get('userId');
  })
});
