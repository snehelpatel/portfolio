function routerConfig ($stateProvider, $urlRouterProvider, $qProvider) {
 $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/home.tpl.html',
    controller: 'HomeController as home'
  })
  .state('root.about', {
    url: '/',
    templateUrl: 'templates/about.tpl.html',
    
  })
  // .state('root.project', {
  //   url: '/projects/:name',
  //   templateUrl: 'templates/single.tpl.html',
  //   controller: 'SingleController as single'
  // })
  $urlRouterProvider.otherwise('/');
  $qProvider.errorOnUnhandledRejections(false);
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$qProvider'];
export { routerConfig };
