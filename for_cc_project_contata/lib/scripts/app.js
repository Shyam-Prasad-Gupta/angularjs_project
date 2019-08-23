// Define the `phonecatApp` module
var noteApp = angular.module('noteApp', []);
var noteListSize = 4;
// Define the `NoteListController` controller on the `phonecatApp` module
noteApp.controller('NoteListController', function noteListController($scope, Scopes) {
  Scopes.store('NoteListController', $scope);
  $scope.notes = [
    {
      type: 'text',
      value: 'Test note one.'
    }, 
	  {
    type: 'text',
      value: 'Test note two.'
    }, 
	  {
	    type:'text',
      value: 'Test note three.'
    },
    {
	    type:'url',
      value: 'www.patentbuddy.com'
    }
  ];
  
  $scope.new_note_value;
  $scope.new_note_type;
  $scope.filterText='text';
  $scope.orderProp;
  
  $scope.addNote = function addNoteToList(){
    $scope.notes[++noteListSize] = { type: $scope.new_note_type,
                        value: $scope.new_note_value };
                      };
 
  $scope.deleteNote = function delteNoteFromList(noteId){
	  $scope.notes.splice(noteId, 1)
  };

  $scope.refreshScope = function refreshScopeFunc(){
    Scopes.store('NoteListController', $scope);
  }
});

//note filter and orderby controller

//custom filter
noteApp.filter('typeFilter', function(Scopes){
  return function(arrayObj){
    var noteListControllerScope = Scopes.get('NoteListController');
    var filtertxt = noteListControllerScope.filterText;
    return arrayObj.filter(function(v){
      return v.type == filtertxt;
    })
  }
});

//service to store the controller scope
noteApp.factory('Scopes', function ($rootScope) {
  var mem = {};

  return {
      store: function (key, value) {
          mem[key] = value;
      },
      get: function (key) {
          return mem[key];
      }
  };
});

function a(){
  new Promise( function(resolve, reject) {
    resolve(data)
    reject(data)
  })
}