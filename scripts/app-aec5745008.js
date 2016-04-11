/******/!function(t){function e(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return t[a].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var a=n(1),o=n(2),r=n(3),i=n(4),s=n(5),c=n(6),l=n(7);angular.module("hdIndexProject",["ngAnimate","ngCookies","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","toastr"]).constant("malarkey",malarkey).constant("moment",moment).config(a.config).config(o.routerConfig).run(r.runBlock).service("webDevTec",s.WebDevTecService).service("countryService",l.CountryService).controller("MainController",i.MainController).directive("acmeNavbar",c.NavbarDirective)},function(t,e){"use strict";function n(t,e,n){"ngInject";t.debugEnabled(!0),n.theme("default").primaryPalette("cyan").accentPalette("amber"),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}n.$inject=["$logProvider","toastrConfig","$mdThemingProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.config=n},function(t,e){"use strict";function n(t,e){"ngInject";t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.routerConfig=n},function(t,e){"use strict";function n(t){"ngInject";t.debug("runBlock end")}n.$inject=["$log"],Object.defineProperty(e,"__esModule",{value:!0}),e.runBlock=n},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();e.MainController=function(){function t(e,a,o,r,i,s,c){"ngInject";n(this,t),this.$http=r,this.$q=a,this.$timeout=e,this.$location=s,this.$anchorScroll=c,this.countryService=i,this.toastr=o,this.isLoading=!1,this.isReadyToCount=!1,this.isCounted=!1,this.currentProfile=null,this.hdiIndex=null}return t.$inject=["$timeout","$q","toastr","$http","countryService","$location","$anchorScroll"],a(t,[{key:"querySearch",value:function(t){var e=this;return this.loadCountriesList().then(function(n){return e.$timeout(function(){return t?n.filter(e.filterResults(t)):n},1e3*Math.random(),!1)})}},{key:"loadCountriesList",value:function(){var t=this.$q.defer();return this.$http.get("/hd-index-project/resources/data/countryList.json").then(function(e){var n=[];angular.forEach(e.data,function(t,e){n.push({code:e,name:t.countryen,rank:t.rank,value:t.countryen.toLowerCase()})}),t.resolve(n)},function(e){return t.reject(e)}),t.promise}},{key:"loadCountryProfile",value:function(t){var e=this;this.isReadyToCount=!1,this.isCounted=!1,this.hdiIndex=null;var n=this.countryService.loadCountryProfile(t);n&&n.then(function(t){e.isReadyToCount=!0,e.currentProfile=angular.copy(t),e.LE=t.HDI_Life_expectancy_at_birth,e.MYS=t.HDI_Mean_years_of_schooling_of_adults,e.EYS=t.HDI_Expected_Years_of_Schooling_of_children,e.GNIpc=t.HDI_GNI_per_capita_in_PPP_terms_constant_2011_international_})}},{key:"getHDI",value:function(){var t=this;this.isLoading=!0,this.isCounted=!0,this.$timeout(function(){t.isLoading=!1,t.hdiIndex=t.countryService.getHDI(t.currentProfile),isNaN(t.hdiIndex)&&(t.isCounted=!1)},1500)}},{key:"filterResults",value:function(t){var e=angular.lowercase(t);return function(t){var n=new RegExp(e,"gi");return t.value.match(n)}}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();e.WebDevTecService=function(){function t(){"ngInject";n(this,t),this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"}]}return a(t,[{key:"getTec",value:function(){return this.data}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(){"ngInject";var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:o,controllerAs:"vm",bindToController:!0};return t}Object.defineProperty(e,"__esModule",{value:!0}),e.NavbarDirective=a;var o=function r(){"ngInject";n(this,r)}},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();e.CountryService=function(){function t(e,a){"ngInject";n(this,t),this.$http=e,this.$q=a}return t.$inject=["$http","$q"],a(t,[{key:"loadCountryProfile",value:function(t){return t?this.$http.get("/hd-index-project/resources/data/countryprofiledata.json").then(function(e){var n=null,a=!0;return angular.forEach(e.data,function(e,o){a&&o===t.code&&(n=e,a=!1)}),n},function(t){return t}):!1}},{key:"getHDI",value:function(t){var e=t.HDI_Life_expectancy_at_birth,n=t.HDI_Mean_years_of_schooling_of_adults,a=t.HDI_Expected_Years_of_Schooling_of_children,o=t.HDI_GNI_per_capita_in_PPP_terms_constant_2011_international_;return Math.cbrt(this.countLifeExpectancyIndex(e)*this.countEducationIndex(n,a)*this.countIncomeIndex(o))}},{key:"countLifeExpectancyIndex",value:function(t){return(t-20)/65}},{key:"countEducationIndex",value:function(t,e){return(t/15+e/18)/2}},{key:"countIncomeIndex",value:function(t){var e=Math.log;return(e(t)-e(100))/(e(75e3)-e(100))}}]),t}()}]),angular.module("hdIndexProject").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout=column layout-fill class=container><section class=panel><h1 class=panel-title>Міжнародні показники людського розвитку</h1><p class=panel-subtitle>Досліджуйте дані людського розвитку з усього світу за допомогою інструментів нижче. Дані, представлені тут, були використані при підготовці Доповіді про розвиток людини 2015 року, випущений 14 грудня 2015 року.</p><!--<md-button ng-click="main.focusSearch()" class="md-raised md-warn panel-button hd-button">--><!--Запит--><!--</md-button>--><!--<p>--><!--With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey>--><!--</p>--><div class=panel-bar><p class=panel-bar-text>На даному ресурсі ви можете переглянути детальну інформацію про ІРЛП будь-якої країни</p></div><div class=panel-mask></div></section><md-content id=anchor-search layout-padding layout=column class=form-container><form ng-submit=$event.preventDefault() novalidate><p>Введіть назву країни (англійською мовою):</p><md-autocomplete md-input-id=countrySearch md-selected-item=main.selectedItem md-selected-item-change=main.loadCountryProfile(main.selectedItem) md-search-text=main.searchText md-items="country in main.querySearch(main.searchText)" md-item-text=country.name md-min-length=0 placeholder="Виберіть країну" md-menu-class=hd-custom-template><md-item-template><span class=country-title><md-icon class="country-icon material-icons md-18">languages</md-icon><span md-highlight-text=main.searchText md-highlight-flags=^i>{{ country.name }}</span> </span><span class=country-metadata><span class=country-code><b>Код:</b> {{ country.code }} </span><span class=country-rank><b>Місце в світі:</b> {{ country.rank }}</span></span></md-item-template></md-autocomplete></form></md-content><!-- country info --><md-content layout-padding class=info-container ng-show=main.isReadyToCount><h3 class=section-title>Інформація про {{ main.searchText }}</h3><p class=hd-text>Очікувана тривалість життя при народженні: <span class=hd-value>{{ main.LE }}</span></p><p class=hd-text>Середня тривалість навчання (років): <span class=hd-value>{{ main.MYS }}</span></p><p class=hd-text>Очікувана тривалість навчання (років): <span class=hd-value>{{ main.EYS }}</span></p><p class=hd-text>Валовий національний дохід (ВНД) на душу населення (2011): <span class=hd-value>{{ main.GNIpc | currency:"$" }}</span></p><md-button class="md-raised md-accent count-button" ng-show=main.isReadyToCount ng-disabled="!main.isReadyToCount || main.isCounted" ng-click=main.getHDI()>Обчислити ІРЛП</md-button><!-- HDI info --><div ng-show="main.hdiIndex !== null && main.isLoading === false"><h5 class=hdi-index-title>Індекс розвитку людського потенціалу ({{ main.searchText }}): <span class=hdi-index-text>{{ main.hdiIndex | number:3 }}</span></h5></div><!-- spinner --><div ng-show=main.isLoading><md-icon class="material-icons md-48 animated infinite rotateIn loading-icon">loop</md-icon></div></md-content><div class=techs layout-align=center><md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><md-card-content><!-- @todo: http://hdr.undp.org/sites/default/files/Country-Profiles/ARG.GIF --><!--<img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}">--><!--<h3 class="md-title">{{ awesomeThing.title }}</h3>--><!--<p>{{ awesomeThing.description }}</p>--></md-card-content><div class=md-action-buttons><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><section flex layout=row layout-align="left center" class=header><md-button href=# class="md-raised hd-button mod-small">Головна</md-button><md-button href=# class="md-raised hd-button mod-small">Проект</md-button><md-button href=# class="md-raised hd-button mod-small">Контакти</md-button></section></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-aec5745008.js.map