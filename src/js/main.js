import angular from 'angular';
import 'angular-ui-router';

import { HomeController } from "./controllers/home";
import { SingleController } from "./controllers/single";
import { allProjects } from "./projarray";
import { routerConfig } from "./routes";

angular
.module('app', ['ui.router'])
.config(routerConfig)
.controller('HomeController', HomeController)
.controller('SingleController', SingleController)
.constant('allProjects', allProjects);
