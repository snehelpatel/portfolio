function routerConfig ($stateProvider, $urlRouterProvider, $qProvider) {
 $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/home.tpl.html',
    controller: 'HomeController as home'
  })
  .state('root.about', {
    url: '/about',
    templateUrl: 'templates/about.tpl.html',
    controller: 'AboutController as about'
  })
  .state('root.resume', {
    url: '/resume',
    templateUrl: 'templates/resume.tpl.html',
    controller: 'ResumeController as resume'
  })
  .state('root.projects', {
    url: '/projects',
    templateUrl: 'templates/projects.tpl.html',
    controller: 'ProjectsController as projects'
  })
  .state('root.project', {
    url: '/projects/:name',
    templateUrl: 'templates/single.tpl.html',
    controller: 'SingleController as single'
  })
  .state('root.contact', {
    url: '/contact',
    templateUrl: 'templates/contact.tpl.html',
    controller: 'ContactController as contact'
  })
  $urlRouterProvider.otherwise('/about');
  $qProvider.errorOnUnhandledRejections(false);
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$qProvider'];
export { routerConfig };
