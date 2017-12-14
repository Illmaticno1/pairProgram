const app = angular.module('Journal_App', []);

app.controller('MainController', ['$http', function($http) {
  // initial state
  this.entries = [];
  

  this.submitEntry = () => {
    $http({ url: '/journal', method: 'post'})
  .then(response => {
    console.log('New Entry successful!');
    this.entries = response.data;
  }, ex => {
    console.log(ex.data.err);
    this.error = ex.statusText;
  })
  .catch(err => this.error = 'Server broke?' );
  }

}]); //end controller
