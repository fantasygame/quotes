import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('quotes/quote-form', 'Integration | Component | quotes/quote form', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{quotes/quote-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#quotes/quote-form}}
      template block text
    {{/quotes/quote-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
