const app = angular.module('Journal_App', []);
console.log('loads');
app.controller('MainController', ['$http', function($http) {
  // initial state
  this.entries = [
  {  title: 'jklj',
    entry: 'lkdjl'}
  ];


  this.view = () => {
    $http({
      method : 'GET',
      url : '/journal'
    }).then(
      (response) => {
        console.log(response.data);
        this.entries = response.data;
      },(error) => {
        console.log(error.message);
      }
    )
  };
  this.view();

  this.formdata = {};
  this.submitEntry = () => {
    console.log(this.formdata);
    $http({
      url: '/journal',
      method: 'post',
      data: this.formdata
    })
  .then(response => {

    console.log('New Entry successful!');
    this.entries = response.data;
    this.view();
  }, ex => {
    console.log(ex.data.err);
    this.error = ex.statusText;
  })
  .catch(err => this.error = 'Server broke?' );
  }

}]); //end controller
console.log('last');
