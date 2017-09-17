
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    };
  }
};

(function(exports) {
  function testNoteObject() {
    var note = new Note("message");
    assert.isTrue(note.readText() === "message");
    // if (note.text !== "message") {
    //   throw new Error("Message not stored in text property");
    // }
  };
  testNoteObject();
})(this);


(function(exports) {
  function testNoteListObject() {
    var noteList = new NoteList();
    var note1 = { text: "Favourite drink: seltzer"}
    noteList.add(note1);
    assert.isTrue(noteList.list[0].text === "Favourite drink: seltzer");
    assert.isTrue(noteList.readList()[0].text === "Favourite drink: seltzer");
  };
  testNoteListObject();
})(this);


(function(exports) {
  function testNoteListViewObject() {
    var noteList = { list:  [{text: "Favourite food: pesto"}, {text: "Favourite drink: seltzer"}]};
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.view() === "<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>");
  };
  testNoteListViewObject();
})(this);

(function(exports) {
  function testNoteController() {
    var notelist3 = new NoteList;
    var notecontroller = new NoteController(notelist3);
    assert.isTrue(notecontroller.notelistview.view() === "<ul><li><div>Favourite drink: bee</div></li></ul>");
  };
  testNoteController();
})(this);

(function(exports) {
  function documentDouble(){
    function elementDouble(){
      this.innerHTML = "blank"
    }

    var elementdouble = new elementDouble();

    this.getElementById = function(anything){
      console.log("inside getElementById");
      // var elementdouble = new elementDouble();
      return elementdouble
    }
  }

  function testNoteController() {
    var notelist2 = new NoteList();
    notelist2.add(new Note("Favourite drink: beer"))
    var notecontroller = new NoteController(notelist);
    var documentdouble = new documentDouble();
    // console.log("doumentdouble: " + documentdouble)
    // console.log("documentdouble.getElementById: " + documentdouble.getElementById())
    // console.log("documentdouble.getElementById.innerHTML: " + documentdouble.getElementById().innerHTML)
    // notecontroller.insertHTML(documentdouble)
    // console.log("notecontroller.insertHTML(documentdouble): "+notecontroller.insertHTML(documentdouble))
    //
    // assert.isTrue(notecontroller.insertHTML(documentdouble) === "<ul><li><div>Favourite drink: beer</div></li></ul>");

    notecontroller.insertHTML(documentdouble)
    console.log("Here: "+documentdouble.getElementById('app').innerHTML)

    assert.isTrue(documentdouble.getElementById('app').innerHTML === "<ul><li><div>Favourite drink: bee</div></li></ul>");
  };
  testNoteController();
})(this);


(function(exports) {
 function testSingleNoteView() {
  var note2 = new Note("Favourite drink: seltzer")
  var singleNoteView = new SingleNoteView(note2);

  assert.isTrue(singleNoteView.view() === "<div>Favourite drink: seltzer</div>");
  }
  testSingleNoteView();
})(this);


(function(exports) {
  function testNoteListObject() {
    var noteList4 = new NoteList();
    var note1 = { text: "Favourite drink: seltzer"}
    noteList4.add(note1);
    assert.isTrue(noteList4.list[0].id === 0);
  };
  testNoteListObject();
})(this);
