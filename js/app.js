var Cat= function() {
	this.name = ko.observable('Jimmy');
	this.clickCount = ko.observable(0);
	this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
	this.nicknames = ko.observableArray([
		{name: "St. Jimmy"}, 
		{name: "Jesus of Suburbia"}, 
		{name: "Whatshername"}
		]);

	this.level = ko.computed(function(){
		if(this.clickCount() < 10){
			return "Infant";
		} else if(this.clickCount() <20){
			return "Teen";
		}  else {
			return "Adult";
		}
	},this);
}

var ViewModel = function() {

	this.currentCat = ko.observable(new Cat())

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	}
}

ko.applyBindings(new ViewModel());