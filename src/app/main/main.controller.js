export class MainController {
  constructor($timeout, $q, toastr, $http, countryService) {
    'ngInject';

    this.$http = $http;
    this.$q = $q;
    this.$timeout = $timeout;

    //this.awesomeThings = [];
    //this.classAnimation = '';
    //this.creationDate = 1460319508235;
    this.toastr = toastr;
    this.loadCountryProfile = countryService.loadCountryProfile;

    //this.activate($timeout, webDevTec);
  }

  querySearch(query) {
    return this.loadCountriesList()
      .then((countries) => {
        return this.$timeout(() => {
          return query ? countries.filter(this.filterResults(query)) : countries;
        }, Math.random() * 1000, false);
      });
  }

  loadCountriesList() {
    var deferred = this.$q.defer();

    this.$http.get('/resources/data/countryList.json')
      .then(
        (response) => {
          var results = [];

          angular.forEach(response.data, (value, key) => {
            results.push({
              code: key,
              name: value.countryen,
              rank: value.rank,
              value: value.countryen.toLowerCase()
            });
          });

          deferred.resolve(results)
        },
        (response) => deferred.reject(response));

    return deferred.promise;
  }

  // lowercase filter
  filterResults(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(country) {
      var re = new RegExp(lowercaseQuery, 'gi');
      return country.value.match(re);
    }
  }

  //activate($timeout, webDevTec) {
  //  this.getWebDevTec(webDevTec);
  //  $timeout(() => {
  //    this.classAnimation = 'rubberBand';
  //  }, 4000);
  //}
  //
  //getWebDevTec(webDevTec) {
  //  this.awesomeThings = webDevTec.getTec();
  //
  //  angular.forEach(this.awesomeThings, (awesomeThing) => {
  //    awesomeThing.rank = Math.random();
  //  });
  //}

  //showToastr() {
  //  this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
  //  this.classAnimation = '';
  //}
}
