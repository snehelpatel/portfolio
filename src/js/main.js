import angular from 'angular';
import 'angular-ui-router';

import { HomeController } from "./controllers/home";
import { AboutController } from "./controllers/about";
// import { ResumeController } from "./controllers/resume";
import { ContactController } from "./controllers/contact";
import { ProjectsController } from "./controllers/projects";
import { SingleController } from "./controllers/single";
import { allProjects } from "./projarray";
import { routerConfig } from "./routes";

angular
.module('app', ['ui.router'])
.config(routerConfig)
.controller('HomeController', HomeController)
.controller('AboutController', AboutController)
// .controller('ResumeController', ResumeController)
.controller('ContactController', ContactController)
.controller('ProjectsController', ProjectsController)
.controller('SingleController', SingleController)
.constant('allProjects', allProjects);
