var FormElementView = Backbone.View.extend({
  tagName: "tr",
  template: Handlebars.compile($("#form-element-template").html()),
  initialize: function (){
    this.model.bind('change', this.render, this);
    this.model.bind('validationError', this.showErrorMessages, this);
    this.model.view = this;
  },
  events: {
    "change" : "validate",
  },
  validate: function() {
    // clear old error messages before validation occurs
    this.$(".error-message").html("").hide();
    return this.model.validate({value: this.$("input").val()});
  },
  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },
  showErrorMessages: function (error){
    this.$(".error-message").html(error.join(". ")).show();
  }
});
