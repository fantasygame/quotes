import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      console.log('save');
    },
    cancel() {
      this.get('router').transitionTo('quotes');
    }
  }
});
