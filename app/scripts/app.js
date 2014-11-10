'use strict';

//add services, directives, controllers, filters, etc. in this module
//avoid adding module dependencies for this module
angular
  .module('hangmanAppInternal', ['mobile-angular-ui']);

//add module dependencies & config and run blocks in this module
//load only the internal module in tests and mock any module dependency
//the only exception to load this module in tests in to test the config & run blocks
angular
  .module('hangmanApp', ['hangmanAppInternal', 'hangmanTranslations', 'wixAngular', 'mobile-angular-ui'])
  .config(function () {
    return;
  });
