function AboutController ($location, $anchorScroll) {

let vm = this;

console.log('are you there?')

vm.scrollTo = scrollTo;
console.log(vm.scrollTo)

function scrollTo(scrollLocation){
    console.log('are you in here?')
    $location.hash(scrollLocation);
      $anchorScroll();
    };

}
AboutController.$inject = ['$location', '$anchorScroll']
export { AboutController };
