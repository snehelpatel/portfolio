function HomeController ($location, $anchorScroll) {

let vm = this;


    vm.scrollTo = function(section){
  			console.log(section);
  			$location.hash(section);
  			$anchorScroll();
  		};

// vm.scrollTo()

}

export { HomeController };
