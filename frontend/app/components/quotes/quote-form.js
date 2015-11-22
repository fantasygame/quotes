import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  quote: null,

  actions: {
    save() {
      this.set('quote.userId', this.get('session.currentUser.id'));
      this.get('quote').save().then((quote) => {
        this.get('router').transitionTo('quotes');
      });
    },
    cancel() {
      this.get('quote').destroyRecord();
      this.get('router').transitionTo('quotes');
    }
  }
});
