import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('quotes/quote-box', 'Integration | Component | quotes/quote box', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{quotes/quote-box}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#quotes/quote-box}}
      template block text
    {{/quotes/quote-box}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
