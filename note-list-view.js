(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
    this.stringpart = "";
  };
  NoteListView.prototype.view = function() {
    var stringpart = "";
    this.noteList.list.forEach(function(note){
      stringpart+=("<li><div><a href='#notes/" + note.id + "'>" + note.text.slice(0,20) + "</a></div></li>");
    // console.log("inside forEach: " + stringpart)
  });
    // console.log("outside forEach: " + stringpart);
    return ("<ul>" + stringpart + "</ul>");
  };

  NoteListView.prototype.giveNotelist = function () {
    return this.noteList
  };

  exports.NoteListView = NoteListView;
})(this);


// <a href="#tiger">Tiger</a> <%= ; %>
// note1 = new Note("hi");
// note2 = new Note("ok");
notelist = new NoteList();
// notelist.add(note1);
// notelist.add(note2);
notelistview = new NoteListView(notelist);
notelistview.view()

// "<ul>
// <li><div>
// Favourite food: pesto
// </div></li>

// <li><div>
// Favourite drink: seltzer
// </div></li>

// </ul>"
