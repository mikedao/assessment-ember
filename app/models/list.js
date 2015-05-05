import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  active: DS.attr('boolean'),
  tasks: DS.hasMany('task')

});
