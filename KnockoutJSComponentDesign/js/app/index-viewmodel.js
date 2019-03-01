define(['knockout','components/searchbar/searchbar'], function(ko){
	
	var IndexPageViewModel = function() {
		
		var self = this;
		self.dataList = ['Eteration','Java','Javascript','Knockout'];
		
	}
	
	ko.applyBindings(new IndexPageViewModel());
	
});