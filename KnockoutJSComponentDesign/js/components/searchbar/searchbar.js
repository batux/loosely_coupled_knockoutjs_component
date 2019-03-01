define(['knockout'], function(ko){
		
	ko.components.register('searchbar', {
		
		viewModel: { require: "components/searchbar/searchbar-viewmodel" },
		template: { require: "text!components/searchbar/searchbar.html" }
	    	
	});
	
});


