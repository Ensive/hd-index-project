export class CountryService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  loadCountryProfile(countryName) {
    console.log(countryName);
  }
}
