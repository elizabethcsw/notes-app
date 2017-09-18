

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
  function Listen(evt) {
    evt.preventDefault();
    console.log("first");
    var newnote = document.getElementById('new').value;
    notecontroller.notelistview.noteList.add(new Note(newnote));
    // notecontroller.insertHTML(this)
    document.getElementById('listnotes').value = 'Back';
    document.getElementById('app').innerHTML = notecontroller.notelistview.view();


    document.getElementById('new').value = ""
    // document.getElementById('new').addEventListener('submit', function(evt){
    // evt.preventDefault();
    // console.log("inside")
    // var newnote = document.getElementById('new').value
    // notecontroller.notelistview.noteList.add(new Note(newnote))
    // });
    // var newnote = document.forms["myForm"]["newnote"].value

    console.log("outside")
  };


  exports.Listen = Listen;
})(this);

(function(exports) {
  function NoteController(notelist) {
    this.notelistview = new NoteListView(notelist);
    this.notelistview.noteList.add(new Note("Favourite drink: beer"))
    this.notelistview.noteList.add(new Note("Watch Andrew Ng tutorial on machine learning"))

  };
    NoteController.prototype.insertHTML = function(anything, doc = document) {
      var element = doc.getElementById('app');
      var notelistview = this.notelistview;

      if(anything.value == 'Back'){
        anything.value = 'List Notes';
        element.innerHTML = "";
      }
      else {
        anything.value = 'Back';

        console.log("Here1:" + location.hash)
        if(location.hash.split("/")[0]==='#notes'){
          console.log("Inside if")
          location.hash = ""
        } else {
          console.log("Inside else")
        }

        console.log("Here2:" + location.pathname.split("notes-app/")[1])
        console.log("Here3:" + location.hash)
        element.innerHTML = notelistview.view();
      }


      // element.innerHTML = notelistview.view();

      window.onhashchange = function(){
        if(location.hash!== ""){
          var id = window.location.hash.split("#")[1].split("/")[1];
          var singlenote = new SingleNoteView(notelistview.noteList.list[id])
          document.getElementById("app").innerHTML = singlenote.view();
          anything.value = 'List Notes';
        }
          // .innerHTML = notelistview.noteList.list[id].readText();

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
  if(anything.innerHTML == 'You'){
    anything.innerHTML = 'Click Me';
  }
  else {
    anything.innerHTML = 'You';
  }

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
