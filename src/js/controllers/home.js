function HomeController ($location, $anchorScroll, allProjects) {

let vm = this;
vm.all = allProjects;
vm.images = [];
console.log('are you there?')

vm.scrollTo = scrollTo;
console.log(vm.scrollTo)

function scrollTo(scrollLocation){
    console.log('are you in here?')
    $location.hash(scrollLocation);
      $anchorScroll.yOffset = 80;
      $anchorScroll();

    };



vm.images = vm.all.map(function(item){
  return item.images
    });
console.log(vm.images)
}
HomeController.$inject = ['$location', '$anchorScroll', 'allProjects']
export { HomeController };
