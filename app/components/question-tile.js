import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkedQuestions: Ember.inject.service(),

  sortBy: ['body:asc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortBy'),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },

    addToBookmarks(questions) {
      this.get('bookmarkedQuestions').add(questions);
    }
  }
});
