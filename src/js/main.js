import angular from 'angular';
import 'angular-ui-router';
import _ from 'lodash';

import { HomeController } from "./controllers/home";
import { AboutController } from "./controllers/about";
import { ProjectsController } from "./controllers/projects";
import { ResumeController } from "./controllers/resume";
import { ContactController } from "./controllers/contact";
import { SingleController } from "./controllers/single";
import { allProjects } from "./projarray";


  // import { run } from "./run";
import { routerConfig } from "./routes";

angular
.module('app', ['ui.router'])
.config(routerConfig)
.run ()
.controller('HomeController', HomeController)
.controller('AboutController', AboutController)
.controller('ProjectsController', ProjectsController)
.controller('ResumeController', ResumeController)
.controller('ContactController', ContactController)
.controller('SingleController', SingleController)
.constant('allProjects', allProjects);
