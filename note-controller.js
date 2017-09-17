
function howdy(){
  var element = document.getElementById('app');
  element.innerHTML = "Howdy"
}

// function NoteController(notelist = new NoteList){
//   notelist.add("Favourite drink: seltzer");
//   notelistview = new NoteListView(notelist);
//   notelistview.view()
// }
//
// NoteController.prototype.insertHTML = function(notelistview) {
//   var element = document.getElementById('app');
//   element.innerHTML = notelistview.view()
// };


(function(exports) {
  function NoteController(notelist) {
    this.notelistview = new NoteListView(notelist);
    this.notelistview.noteList.add(new Note("Favourite drink: beer"))
    this.notelistview.noteList.add(new Note("Watch Andrew Ng tutorial on machine learning"))

  };
    NoteController.prototype.insertHTML = function(doc = document) {
      var element = doc.getElementById('app');
      var notelistview = this.notelistview

      element.innerHTML = notelistview.view()

      window.onhashchange = function(){
        var id = window.location.hash.split("#")[1].split("/")[1];
        document
          .getElementById("app")
          .innerHTML = notelistview.noteList.list[id].readText();
      };

      return element.innerHTML
    };


  exports.NoteController = NoteController;
})(this);


















function display(newColor){
  var element = document.getElementById('app');
  element.style.color = newColor
}

function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
};

function sayHello() {
   alert("Hello World")
};

function validation() {
  //  return either true or false
};

function over() {
   var bigtitle = document.getElementById('bigtitle');
   bigtitle.innerHTML = "Mouse Over";
};

function out() {
   var bigtitle = document.getElementById('bigtitle');
   bigtitle.innerHTML = "This is inside the division";
};

function changeButton(anything) {
  anything.innerHTML = 'You';
}

function changeText(){
  var para = document.getElementById('para');
  para.innerHTML = "hi there!"
}

function showDate(){
  var time = document.getElementById('time');
  time.innerHTML = Date();
}

function clearDate(){
  var time = document.getElementById('time');
  time.innerHTML = 'Nothing';
};
