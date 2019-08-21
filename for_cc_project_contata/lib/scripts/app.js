// Define the `phonecatApp` module
var noteApp = angular.module('noteApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
noteApp.controller('NoteListController', function noteListController($scope) {
  $scope.notes = [
    {
	  noteid:1,
      value: 'Test note one.'
    }, 
	{
	  noteid:2,
      value: 'Test note two.'
    }, 
	{
	  noteid:3,
      value: 'Test note three.'
    }
  ];
  
  $scope.new_note;
  
  $scope.addNote = function addNoteToList(note){
	  $scope.notes[notes.length+1] = note;
  };
  
  $scope.deleteNote = function delteNoteFromList(noteId){
	  $scope.notes.splice(noteId-1, 1);
  };
});
