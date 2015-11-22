export default {
  name: "current-user",

  initialize: function({ application }) {
    const service = Ember.ObjectProxy.create({ isServiceFactory: true });
    application.register('service:current-user', service, { instantiate: false, singleton: true });
    application.inject('route', 'currentUser', 'service:current-user');
    application.inject('controller', 'currentUser', 'service:current-user');
    application.inject('component', 'currentUser', 'service:current-user');
  }
};
