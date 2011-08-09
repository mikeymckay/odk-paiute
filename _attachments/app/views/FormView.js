var FormView = Backbone.View.extend({
  el: $("body"),
  template: Handlebars.compile($("#form-template").html()),
  initialize: function (){
    _.bindAll(this, "render", "addOne");
    return this;
  },
  render: function(){
    $(this.el).html(this.template());
    this.collection.each(this.addOne); // don't understand syntax - I think bindAll created default parameters for the addOne function
    return this;
  },
  addOne: function(formElement){
    $(this.$("table")).append((new FormElementView({model: formElement})).render().el);
  },
  events: {
    "click #form-save " : "save",
  },
  save: function(){
    $.couch.db("odk").saveDoc($(this.$("form")).toObject())
  }
});
