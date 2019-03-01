define(['knockout'], function(ko) {
	
	// ViewModel structure for "SearchBar Component".
	var SearchbarViewModel = function(vm) {
		
		var self = this;
		
		var value = vm.value;
    	if(typeof vm.value === "function") value = vm.value();
		
    	// Datasource which is a simple string-based array will be given by another point like "ViewModel, Component" etc...
    	self.dataSource = value.dataSource;
    	
		self.searchedText = ko.observable();
		self.searchResults = ko.observableArray(value.dataSource);
		
		// We will bind this function to search button. 
		self.searchInDatasource = function() {
			
			// Take the text of "HTML Input Element" via Observer.
			var searchedText = self.searchedText();
			
			// Prepare the results of search process.
			var searchResults = self.prepareSearchResults(searchedText);
			
			// Set the search results as a new array.
			self.searchResults(searchResults);
		}
		
		self.prepareSearchResults = function(searchedText) {
			
			// If searchedtext is empty or undefined, we will return all data items as a new array.
			if(!searchedText) {
				return self.dataSource;
			}
			
			var searchResults = [];
			
			for(var i=0; i < self.dataSource.length; i++) {
				
				var dataItem = self.dataSource[i];
				
				// If dataItem contains a part of searched text, we will add this dataItem to result array. 
				if(dataItem.toLowerCase().indexOf(searchedText.toLowerCase()) > -1) {
					searchResults.push(dataItem);
				}
				
			}
			
			return searchResults;
		}
	}
	
	return SearchbarViewModel;
	
});
