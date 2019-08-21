// Define the `phonecatApp` module
var noteApp = angular.module('noteApp', []);
var noteListSize = 4;
// Define the `PhoneListController` controller on the `phonecatApp` module
noteApp.controller('NoteListController', function noteListController($scope) {
  $scope.notes = {
    1:{
      type: 'text',
      value: 'Test note one.'
    }, 
	  2:{
    type: 'text',
      value: 'Test note two.'
    }, 
	  3:{
	    type:'text',
      value: 'Test note three.'
    },
    4:{
	    type:'url',
      value: 'www.patentbuddy.com'
    }
  };
  
  $scope.new_note_value;
  $scope.new_note_type;
  
  $scope.addNote = function addNoteToList(){
    $scope.notes[++noteListSize] = { type: $scope.new_note_type,
                        value: $scope.new_note_value };
                      };
  
  $scope.deleteNote = function delteNoteFromList(noteId){
	  delete $scope.notes[noteId]
  };
});
