// var Note = require("./note-model").Note;

(function(exports) {
  function NoteList() {
    this.list = [];
    this._id = 0
  };
  NoteList.prototype.add = function(note) {
    this.list.push(note);
    note.id = this._id
    this._id +=1
    // this.list.push(new Note(message));
  };

  NoteList.prototype.readList = function() {
    return this.list;
  };

  exports.NoteList = NoteList;
})(this);
