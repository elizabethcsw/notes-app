(function(exports) {
  function SingleNoteView(note) {
    this.note = note
    this.fullnote = ""

}
  SingleNoteView.prototype.view = function() {
    this.fullnote = ("<br><div> Note: " + this.note.text + "</div>");
    return this.fullnote
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
