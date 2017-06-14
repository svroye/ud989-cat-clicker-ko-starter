var ViewModel = function() {
	this.name = ko.observable('Tommy');
	this.clickCount = ko.observable(0);
	this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	}

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

ko.applyBindings(new ViewModel());