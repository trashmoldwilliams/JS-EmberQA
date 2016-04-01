import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
        var params = {
          body: this.get('body'),
          author: this.get('author'),
          question: this.get('question')
        };
        this.set('addNewAnswer', false);
        this.sendAction('save2', params);
      }
    }
});
