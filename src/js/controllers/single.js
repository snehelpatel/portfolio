import $ from 'jquery';
import _ from 'lodash';


function SingleController (allProjects, $stateParams) {

let vm = this;
vm.all = allProjects;
vm.name = $stateParams.name;
vm.indiv = [];



for (let i=0 ; i <vm.all.length;i++){
  if(vm.all[i].link === vm.name)
  vm.indiv.push(vm.all[i])
};

vm.images = vm.indiv[0].images;

}
export { SingleController };
