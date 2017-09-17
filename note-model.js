(function(exports) {
  function Note(message) {
    this.text = message;
    this.id = 0
  };
  Note.prototype.readText = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);
