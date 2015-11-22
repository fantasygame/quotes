import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    save() {
      this.set('quote.userId', this.get('session.currentUser.id'));
      this.get('quote').save().then((quote) => {
        this.get('router').transitionTo('quotes');
      });
    },
    cancel() {
      this.get('router').transitionTo('quotes');
    }
  }
});
