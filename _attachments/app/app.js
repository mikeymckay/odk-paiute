
/** Configure the database **/
Backbone.couch_connector.config.db_name = "odk";
Backbone.couch_connector.config.ddoc_name = "app";
Backbone.couch_connector.config.global_changes = false;

// Download the form from couch
$.couch.db("odk").openDoc("500e881aab2cd27a5c7a72400f000fb0", {
  success: function(doc) {
    (new FormView({collection: new Form(doc.form_elements)})).render();
  }
});


