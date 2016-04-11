export class MainController {
  constructor($timeout, $q, toastr, $http, countryService) {
    'ngInject';

    this.$http = $http;
    this.$q = $q;
    this.$timeout = $timeout;
    this.countryService = countryService;

    //this.awesomeThings = [];
    //this.classAnimation = '';
    //this.creationDate = 1460319508235;
    this.toastr = toastr;

    // country data
    this.isLoading = false;
    this.isReadyToCount = false;
    this.isCounted = false;

    this.currentProfile = null;
    this.hdiIndex = null;

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

  // @todo: move to the service
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
        // @todo: error message
        (response) => deferred.reject(response));

    return deferred.promise;
  }

  loadCountryProfile(country) {
    this.isReadyToCount = false;
    this.isCounted = false;
    this.hdiIndex = null;

    var loadCountry = this.countryService.loadCountryProfile(country);

    if (loadCountry) {
      loadCountry
        .then((countryProfile) => {
          this.isReadyToCount = true;
          this.currentProfile = angular.copy(countryProfile);

          // describe data
          // @todo: implement
          //this.countryService.getCountryInfo(countryProfile);
          this.LE = countryProfile.HDI_Life_expectancy_at_birth;
          this.MYS = countryProfile.HDI_Mean_years_of_schooling_of_adults;
          this.EYS = countryProfile.HDI_Expected_Years_of_Schooling_of_children;
          this.GNIpc = countryProfile.HDI_GNI_per_capita_in_PPP_terms_constant_2011_international_;

        });
    }
  }

  getHDI() {
    this.isLoading = true;
    this.isCounted = true;

    this.$timeout(() => {
      this.isLoading = false;
      this.hdiIndex = this.countryService.getHDI(this.currentProfile);

      if (isNaN(this.hdiIndex)) {
        this.isCounted = false;
      }

    }, 1500);
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
