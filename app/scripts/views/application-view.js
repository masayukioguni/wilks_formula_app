wilksFormulaApp.Views.ApplicationView = Backbone.View.extend({
  el: $('body'),
  initialize: function(){
    _.bindAll(this,'render','doSearch');  
	  //this.render();
  },
  render: function(){
	  
  },
  events: {
    "click button#weight_inc": "doSearch"
  },
  doSearch: function(event){
    console.log("ssss");
  }

});
