export class CountryService {
  constructor($http, $q) {
    'ngInject';

    this.$http = $http;
    this.$q = $q;
  }

  loadCountryProfile(country) {
    if (!country) return false;

    return this.$http.get('/resources/data/countryprofiledata.json')
      .then(
        (response) => {
          var selectedProfile = null;
          var keepGoing = true;

          angular.forEach(response.data, (value, key) => {
            if (keepGoing) {
              if (key === country.code) { selectedProfile = value; keepGoing = false; }
            }
          });

          return selectedProfile;
        },
        // @todo: error message
        (response) => response);
  }

  getHDI() {

  }

  countLifeExpectancyIndex() {

  }

  countEducationIndex() {

  }

  countIncomeIndex() {

  }

}
