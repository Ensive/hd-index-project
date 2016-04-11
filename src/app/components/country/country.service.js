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

  getHDI(profile) {
    // fetch data
    var LE = profile.HDI_Life_expectancy_at_birth;
    var MYS = profile.HDI_Mean_years_of_schooling_of_adults;
    var EYS = profile.HDI_Expected_Years_of_Schooling_of_children;
    var GNIpc = profile.HDI_GNI_per_capita_in_PPP_terms_constant_2011_international_;

    // count index
    return Math.cbrt(
      this.countLifeExpectancyIndex(LE) *
      this.countEducationIndex(MYS, EYS) *
      this.countIncomeIndex(GNIpc));
  }

  countLifeExpectancyIndex(le) {
    return (le - 20) / (85 - 20);
  }

  countEducationIndex(MYS, EYS) {
    return (MYS / 15 + EYS / 18) / 2;
  }

  countIncomeIndex(GNIpc) {
    var ln = Math.log;
    return ( ln(GNIpc) - ln(100) ) / ( ln(75000) - ln(100) );
  }

}
