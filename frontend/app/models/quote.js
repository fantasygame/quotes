import DS from 'ember-data';
import { memberAction, collectionAction } from 'ember-api-actions';

const { attr } = DS;

export default DS.Model.extend({
  content: DS.attr('string'),
  userId: DS.attr('number'),
  voteBalance: DS.attr('number'),
  upvote: memberAction({ path: 'upvote' }),
});
