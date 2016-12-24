function HomeController ($location, $anchorScroll) {

let vm = this;

vm.template = [];


  vm.loadMore = function() {
    var last = vm.template[vm.templates.length - 1];
    for(var i = 1; i <= 8; i++) {
      vm.template.push(last + i);
    }
  };

}





export { HomeController };
