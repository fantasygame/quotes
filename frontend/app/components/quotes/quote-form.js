import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),
  actions: {
    save() {
      this.set('quote.user_id', this.get('session.data.authenticated.user_id'));
      this.get('quote').save().then((quote) => {
        this.get('router').transitionTo('quotes');
      });
    },
    cancel() {
      this.get('router').transitionTo('quotes');
    }
  }
});
