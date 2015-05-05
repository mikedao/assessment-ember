import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  active: DS.attr('boolean'),
  dueDate: DS.attr('datetime'),
  list: DS.belongsTo('list')

});
