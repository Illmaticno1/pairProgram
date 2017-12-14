const app = angular.module('Journal_App', []);

app.controller('MainController', ['$http', function($http) {
  // initial state
  this.entries = [
    {
      title: 'hmmm',
      entry: 'yuopilaf',
      img: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg'
    }
  ];
  this.title = 'hmmm';
  this.entry = 'yuopilaf';
  this.img = 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg';

  this.view = () => {
    $http({
      method : 'GET',
      url : '/journal'
    }).then(
      (response) => {
        this.entries = response.data;
      },(error) => {
        console.log(error.message);
      }
    )
  };
  this.view();

  this.formdata = {};
  this.submitEntry = () => {
    $http({
      url: '/journal',
      method: 'post',
      data: this.formdata
    })
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
