import Ember from 'ember';

export default Ember.Route.extend({
  bookmarkedQuestions: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  sortBy: ['body:asc'],
  sortedQuestions: Ember.computed.sort('model.questions', 'sortBy'),

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    addToBookmarks(questions) {
      this.get('shoppingCart').add(questions);
    },
  }
});
