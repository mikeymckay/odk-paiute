var Form = Backbone.Collection.extend({
  model: FormElement,
  url: "/form",
  validate: function(){
    var validationErrors = [];
    this.each(function(formElement){
      validationErrors.push(formElement.view.validate());
    });
    return _.compact(validationErrors);
  },
  valid: function(){
    return this.validate().length == 0
  }
});

