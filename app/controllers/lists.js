import Ember from 'ember';

export default Ember.Controller.extend({
  title: null,
       actions: {
         addNewList: function () {
           alert(this.getProperties('title'));
           let list = this.getProperties('title');
           this.store.createRecord('list', list).save();
         }
       }

});
