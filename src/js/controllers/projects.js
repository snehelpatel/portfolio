import _ from 'lodash';
function ProjectsController (allProjects) {

let vm = this
vm.all = allProjects;
vm.images = [];


console.log (vm.all)

vm.images = vm.all.map(function(item){
  return item.images
});
console.log (vm.images)
}
export { ProjectsController };
