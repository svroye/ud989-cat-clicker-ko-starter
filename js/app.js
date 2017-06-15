var initialCats = [
{
	clickCount: 0,
	imgSrc: 'img/22252709_010df3379e_z.jpg',
	name: 'Billy',
	nicknames: ['Bil','Billy-o']
},
{
	clickCount: 0,
	imgSrc: 'img/434164568_fea0ad4013_z.jpg',
	name: 'Tré',
	nicknames: ['Tré Cool', 'Trééé']
},
{
	clickCount: 0,
	imgSrc: 'img/1413379559_412a540d29_z.jpg',
	name: 'Mike',
	nicknames: ['Miiiiike', 'Mike Dirnt']
},
{
	clickCount: 0,
	imgSrc: 'img/4154543904_6e2428c421_z.jpg',
	name: 'Jimmy',
	nicknames: ['St. Jimmy', 'Son of the devil']
},
{
	clickCount: 0,
	imgSrc: 'img/9648464288_2516b35537_z.jpg',
	name: 'Jesus of Suburbia',
	nicknames: ['JoS', 'Whatshisname']
}
];

var Cat= function(data) {
	this.name = ko.observable(data.name);
	this.clickCount = ko.observable(data.clickCount);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

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
	var self=this;
	this.catList = ko.observableArray();
	initialCats.forEach(function(item){
		self.catList.push(new Cat(item));
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

	this.changeCurrentCat = function(clickedCat){
		self.currentCat(clickedCat);
	};
}

ko.applyBindings(new ViewModel());