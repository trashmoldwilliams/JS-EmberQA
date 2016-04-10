import Ember from 'ember';

export function questionActivity(params) {
  var question = params[0];

  if(question.get('answers').get('length') <= 0) {
    return Ember.String.htmlSafe('<span>Question Unanswered!</span>');
  }
}

export default Ember.Helper.helper(questionActivity);
