
/** Configure the database **/
Backbone.couch_connector.config.db_name = "odk";
Backbone.couch_connector.config.ddoc_name = "app";
Backbone.couch_connector.config.global_changes = false;

// Download the form document from couch (sample_form.json is in _docs)
$.couch.db("odk").openDoc("sample_form", {
  success: function(doc) {
    (new FormView({collection: new Form(doc.form_elements)})).render();
  }
});


