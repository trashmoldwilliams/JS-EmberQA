import Ember from 'ember';

export default Ember.Component.extend({
  update(question, params) {
    this.sendAction('update', question, params);
  },
});
