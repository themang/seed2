
var name = module.exports = 'main';

require('/lib/angular');
var _ = require('lodash/lodash');

angular.module(name, [
  'ui.router',
  'ngMaterial',
  'ngSanitize',

])
.config(['$compileProvider', function($compileProvider) {
  var re = /^\s*(?:blob(?::|%3A))?(https?|ftp|file)(:|%3A)|data:image\//;
  $compileProvider.imgSrcSanitizationWhitelist(re);
}])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('main', {
    url: '/',
    template: require('./index.html'),
    controller: 'MainCtrl',
    controllerAs: 'Main'
  });
}])
.controller('MainCtrl', [function() {

}]);


angular.element(document).ready(function() {
  var modules = ['main', require('/lib/html5mode')];
  angular.bootstrap(document, modules);
});

