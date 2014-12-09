(function() {
  'use strict';

  angular.module('Core.modules', [
  ]);

  angular.module('Core.directives', [
    'Unsplash.directives'
  ]);

  angular.module('Core.filters', [
  ]);

  var app_deps = [
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    'Core.modules',
    'Core.directives',
    'Core.filters'
  ];

  function bootstrapApplication() {
    angular.element(document).ready(function() {
      angular.bootstrap(document.body, ['Application']);
    });
  }

  bootstrapApplication();
  angular.module('Application', app_deps);
})();
