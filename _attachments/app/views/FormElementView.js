var FormElementView = Backbone.View.extend({
  tagName: "tr",
  template: Handlebars.compile($("#form-element-template").html()),
  initialize: function (){
    this.model.bind('change', this.render, this);
    this.model.bind('error', this.error, this);
    this.model.view = this;
  },
  events: {
    "change" : "validate",
  },
  validate: function() {
    // clear old error messages before validation occurs
    this.$(".error-message").html("").hide();
    this.model.validate({value: this.$("input").val()});
    return this;
  },
  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },
  error: function (model, error){
    this.$(".error-message").html(error.join(". ")).show();
  }
});
