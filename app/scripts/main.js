
window.wilksFormulaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
  	// Main View
    var view = new wilksFormulaApp.Views.ApplicationView(
  );

    console.log('Hello from Backbone!');
  }
};

$(document).ready(function(){
  wilksFormulaApp.init();
});
